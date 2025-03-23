---
description: "Standards for logging, metrics, tracing, and overall system observability in Go"
globs: "**/*.go"
__meta__type: "guideline"
__meta__repo: "felipepimentel/peppergo"
__meta__tags: ["Go","Logging","Metrics","Tracing","Observability"]
__meta__rate: 9
---
# Monitoring Guidelines

## Structured Logging

1. **Logger Configuration**
   ```go
   // logger/config.go
   
   // NewLogger creates a new structured logger
   func NewLogger(env string) (*zap.Logger, error) {
       var config zap.Config
       
       if env == "production" {
           config = zap.NewProductionConfig()
           config.EncoderConfig.TimeKey = "timestamp"
           config.EncoderConfig.EncodeTime = zapcore.ISO8601TimeEncoder
       } else {
           config = zap.NewDevelopmentConfig()
       }
       
       return config.Build()
   }
   ```

2. **Contextual Logging**
   ```go
   // handler/user.go
   
   func (h *Handler) CreateUser(w http.ResponseWriter, r *http.Request) {
       ctx := r.Context()
       logger := h.logger.With(
           zap.String("handler", "CreateUser"),
           zap.String("request_id", middleware.GetRequestID(ctx)),
       )
       
       logger.Info("processing create user request")
       
       // ... handler implementation
       
       if err != nil {
           logger.Error("failed to create user",
               zap.Error(err),
               zap.String("user_email", input.Email),
           )
           // ... error handling
       }
   }
   ```

## Metrics Collection

1. **Prometheus Metrics**
   ```go
   // metrics/metrics.go
   
   var (
       RequestDuration = promauto.NewHistogramVec(
           prometheus.HistogramOpts{
               Name: "http_request_duration_seconds",
               Help: "Duration of HTTP requests",
               Buckets: []float64{.005, .01, .025, .05, .1, .25, .5, 1, 2.5, 5, 10},
           },
           []string{"handler", "method", "status"},
       )
       
       ActiveRequests = promauto.NewGaugeVec(
           prometheus.GaugeOpts{
               Name: "http_requests_active",
               Help: "Number of active HTTP requests",
           },
           []string{"handler"},
       )
       
       DatabaseErrors = promauto.NewCounterVec(
           prometheus.CounterOpts{
               Name: "database_errors_total",
               Help: "Total number of database errors",
           },
           []string{"operation"},
       )
   )
   ```

2. **Metrics Middleware**
   ```go
   // middleware/metrics.go
   
   func MetricsMiddleware(next http.Handler) http.Handler {
       return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
           start := time.Now()
           path := r.URL.Path
           
           // Track active requests
           ActiveRequests.WithLabelValues(path).Inc()
           defer ActiveRequests.WithLabelValues(path).Dec()
           
           // Use response writer wrapper to capture status code
           ww := middleware.NewWrapResponseWriter(w, r.ProtoMajor)
           
           next.ServeHTTP(ww, r)
           
           // Record request duration
           duration := time.Since(start).Seconds()
           RequestDuration.WithLabelValues(
               path,
               r.Method,
               strconv.Itoa(ww.Status()),
           ).Observe(duration)
       })
   }
   ```

## Distributed Tracing

1. **Trace Configuration**
   ```go
   // tracer/config.go
   
   func InitTracer(serviceName string) (*sdktrace.TracerProvider, error) {
       exporter, err := jaeger.New(jaeger.WithCollectorEndpoint(
           jaeger.WithEndpoint("http://jaeger:14268/api/traces"),
       ))
       if err != nil {
           return nil, fmt.Errorf("failed to create jaeger exporter: %w", err)
       }
       
       tp := sdktrace.NewTracerProvider(
           sdktrace.WithBatcher(exporter),
           sdktrace.WithResource(resource.NewWithAttributes(
               semconv.SchemaURL,
               semconv.ServiceNameKey.String(serviceName),
           )),
       )
       
       otel.SetTracerProvider(tp)
       return tp, nil
   }
   ```

2. **Trace Implementation**
   ```go
   // handler/order.go
   
   func (h *Handler) ProcessOrder(w http.ResponseWriter, r *http.Request) {
       ctx := r.Context()
       
       tracer := otel.Tracer("order-service")
       ctx, span := tracer.Start(ctx, "ProcessOrder")
       defer span.End()
       
       // Add relevant attributes
       span.SetAttributes(
           attribute.String("order.id", orderID),
           attribute.Float64("order.amount", amount),
       )
       
       // Process order with context
       err := h.orderService.Process(ctx, order)
       if err != nil {
           span.RecordError(err)
           span.SetStatus(codes.Error, err.Error())
           // ... error handling
       }
   }
   ```

## Health Checks

1. **Health Check Handler**
   ```go
   // health/handler.go
   
   type HealthChecker struct {
       checks map[string]HealthCheck
   }
   
   type HealthCheck func() error
   
   func (h *HealthChecker) AddCheck(name string, check HealthCheck) {
       h.checks[name] = check
   }
   
   func (h *HealthChecker) Handler() http.HandlerFunc {
       return func(w http.ResponseWriter, r *http.Request) {
           status := http.StatusOK
           result := make(map[string]string)
           
           for name, check := range h.checks {
               if err := check(); err != nil {
                   status = http.StatusServiceUnavailable
                   result[name] = fmt.Sprintf("unhealthy: %v", err)
               } else {
                   result[name] = "healthy"
               }
           }
           
           w.Header().Set("Content-Type", "application/json")
           w.WriteHeader(status)
           json.NewEncoder(w).Encode(result)
       }
   }
   ```

## Resource Monitoring

1. **System Metrics**
   ```go
   // metrics/system.go
   
   var (
       MemoryUsage = promauto.NewGauge(prometheus.GaugeOpts{
           Name: "process_memory_bytes",
           Help: "Process memory usage in bytes",
       })
       
       GoroutineCount = promauto.NewGauge(prometheus.GaugeOpts{
           Name: "goroutines_total",
           Help: "Total number of goroutines",
       })
   )
   
   func CollectSystemMetrics(ctx context.Context) {
       ticker := time.NewTicker(15 * time.Second)
       defer ticker.Stop()
       
       for {
           select {
           case <-ctx.Done():
               return
           case <-ticker.C:
               var m runtime.MemStats
               runtime.ReadMemStats(&m)
               
               MemoryUsage.Set(float64(m.Alloc))
               GoroutineCount.Set(float64(runtime.NumGoroutine()))
           }
       }
   }
   ```

## Alert Configuration

1. **Prometheus Alert Rules**
   ```yaml
   # alerts/rules.yaml
   groups:
   - name: app
     rules:
     - alert: HighErrorRate
       expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.1
       for: 5m
       labels:
         severity: critical
       annotations:
         summary: High HTTP error rate
         description: Error rate is {{ $value }} per second
   
     - alert: HighLatency
       expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 1
       for: 5m
       labels:
         severity: warning
       annotations:
         summary: High latency detected
         description: 95th percentile latency is {{ $value }} seconds
   ```

## Monitoring Setup

1. **Monitoring Stack**
   ```yaml
   # docker-compose.monitoring.yml
   version: '3.8'
   
   services:
     prometheus:
       image: prom/prometheus
       volumes:
         - ./prometheus.yml:/etc/prometheus/prometheus.yml
       ports:
         - "9090:9090"
   
     grafana:
       image: grafana/grafana
       ports:
         - "3000:3000"
       depends_on:
         - prometheus
   
     jaeger:
       image: jaegertracing/all-in-one
       ports:
         - "16686:16686"
         - "14268:14268"
   ```

## Best Practices

1. **Log Levels**
   - DEBUG: Detailed information for debugging
   - INFO: General operational events
   - WARN: Warning messages for potentially harmful situations
   - ERROR: Error events that might still allow the application to continue running
   - FATAL: Very severe error events that will lead the application to abort

2. **Metric Naming**
   - Use lowercase with underscores
   - Include units in the name (e.g., `_seconds`, `_bytes`)
   - Use prefixes for grouping (e.g., `http_`, `db_`)
   - Include relevant labels but don't over-dimension