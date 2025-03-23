---
description: "Guidelines for unit, integration, and lifecycle tests in Go projects"
globs: "**/*_test.go"
__meta__type: "guideline"
__meta__repo: "felipepimentel/peppergo"
__meta__tags: ["Go","Testing","Unit Tests","Integration Tests","Mocking"]
__meta__rate: 9
---
# Testing Guidelines

## Test Organization

1. **Unit Tests**
   - Place test files next to the code being tested
   - Use `_test.go` suffix
   - Follow table-driven test pattern
   ```go
   func TestMyFunction(t *testing.T) {
       tests := []struct {
           name     string
           input    string
           expected string
           wantErr  bool
       }{
           {
               name:     "valid input",
               input:    "hello",
               expected: "HELLO",
               wantErr:  false,
           },
           {
               name:     "empty input",
               input:    "",
               expected: "",
               wantErr:  true,
           },
       }

       for _, tt := range tests {
           t.Run(tt.name, func(t *testing.T) {
               result, err := MyFunction(tt.input)
               if (err != nil) != tt.wantErr {
                   t.Errorf("MyFunction() error = %v, wantErr %v", err, tt.wantErr)
                   return
               }
               if result != tt.expected {
                   t.Errorf("MyFunction() = %v, want %v", result, tt.expected)
               }
           })
       }
   }
   ```

2. **Integration Tests**
   - Place in `/test/integration`
   - Use test containers for dependencies
   - Clean up resources after tests
   ```go
   func TestIntegration(t *testing.T) {
       if testing.Short() {
           t.Skip("skipping integration test")
       }

       // Start test container
       ctx := context.Background()
       postgres, err := testcontainers.StartPostgresContainer(ctx)
       if err != nil {
           t.Fatal(err)
       }
       defer postgres.Terminate(ctx)

       // Run tests
       // ...
   }
   ```

3. **Benchmarks**
   ```go
   func BenchmarkMyFunction(b *testing.B) {
       for i := 0; i < b.N; i++ {
           MyFunction("test input")
       }
   }
   ```

## Test Coverage

1. **Coverage Requirements**
   - Unit tests: Minimum 80% coverage
   - Integration tests: Critical paths covered
   - Run coverage: `go test -cover ./...`

2. **Coverage Report**
   ```bash
   go test -coverprofile=coverage.out ./...
   go tool cover -html=coverage.out
   ```

## Mocking

1. **Interface Mocking**
   ```go
   type UserRepository interface {
       FindByID(ctx context.Context, id string) (*User, error)
   }

   type mockUserRepo struct {
       mock.Mock
   }

   func (m *mockUserRepo) FindByID(ctx context.Context, id string) (*User, error) {
       args := m.Called(ctx, id)
       if args.Get(0) == nil {
           return nil, args.Error(1)
       }
       return args.Get(0).(*User), args.Error(1)
   }
   ```

2. **HTTP Mocking**
   ```go
   func TestHTTPHandler(t *testing.T) {
       // Create a mock server
       server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
           w.WriteHeader(http.StatusOK)
           w.Write([]byte(`{"status": "ok"}`))
       }))
       defer server.Close()

       // Use mock server URL in tests
       client := NewClient(server.URL)
       // ... test implementation
   }
   ```

## Test Helpers

1. **Common Assertions**
   ```go
   func assertError(t *testing.T, got, want error) {
       t.Helper()
       if !errors.Is(got, want) {
           t.Errorf("got error %v, want %v", got, want)
       }
   }

   func assertJSON(t *testing.T, got, want string) {
       t.Helper()
       var gotJSON, wantJSON interface{}
       if err := json.Unmarshal([]byte(got), &gotJSON); err != nil {
           t.Fatalf("invalid JSON in got: %v", err)
       }
       if err := json.Unmarshal([]byte(want), &wantJSON); err != nil {
           t.Fatalf("invalid JSON in want: %v", err)
       }
       if !reflect.DeepEqual(gotJSON, wantJSON) {
           t.Errorf("got %v, want %v", gotJSON, wantJSON)
       }
   }
   ```

2. **Test Fixtures**
   ```go
   func loadFixture(t *testing.T, name string) []byte {
       t.Helper()
       data, err := os.ReadFile(filepath.Join("testdata", name))
       if err != nil {
           t.Fatalf("failed to load fixture %s: %v", name, err)
       }
       return data
   }
   ```

## Test Execution

1. **Running Tests**
   ```bash
   # Run all tests
   go test ./...

   # Run specific test
   go test -run TestMyFunction

   # Run tests with race detector
   go test -race ./...

   # Run tests with verbose output
   go test -v ./...
   ```

2. **Test Tags**
   ```go
   // +build integration

   package mypackage_test

   func TestIntegration(t *testing.T) {
       // ...
   }
   ```

## Best Practices

1. **Test Naming**
   - Use `Test` prefix
   - Describe what's being tested
   - Include scenario
   ```go
   func TestUser_Create_ValidInput(t *testing.T) {}
   func TestUser_Create_InvalidEmail(t *testing.T) {}
   ```

2. **Test Structure**
   - Arrange: Set up test data
   - Act: Execute the code
   - Assert: Verify results
   ```go
   func TestService_Process(t *testing.T) {
       // Arrange
       svc := NewService()
       input := "test"

       // Act
       result, err := svc.Process(input)

       // Assert
       if err != nil {
           t.Errorf("unexpected error: %v", err)
       }
       if result != expected {
           t.Errorf("got %v, want %v", result, expected)
       }
   }
   ```

3. **Test Independence**
   - Each test should be independent
   - Clean up resources
   - Don't rely on test execution order
   ```go
   func TestDatabase(t *testing.T) {
       // Set up clean database for each test
       db := setupTestDB(t)
       t.Cleanup(func() {
           db.Close()
       })
       // ... test implementation
   }
   ```