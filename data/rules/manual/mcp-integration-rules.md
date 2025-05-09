---
description: "Integration rules and guidelines for Model Context Protocol"
globs: ["src/mcp/**/integration/**/*.ts"]
__meta__type: "guideline"
__meta__repo: "sparesparrow/hard-coder"
__meta__tags: ["Integration","Typescript","Server Management","Resource Management","Event Broadcasting"]
__meta__rate: 8
---
# MCP Integration Rules

## Multi-Server Integration

### Server Manager
```typescript
interface ServerConfig {
  id: string;
  url: string;
  type: 'stdio' | 'sse' | 'websocket';
  capabilities: string[];
  metadata?: Record<string, unknown>;
}

class ServerManager {
  private servers = new Map<string, {
    client: MCPClient;
    transport: Transport;
    capabilities: Set<string>;
  }>();

  async addServer(config: ServerConfig): Promise<void> {
    const client = await this.createClient(config);
    const transport = await this.createTransport(config);

    await client.connect(transport);
    this.servers.set(config.id, {
      client,
      transport,
      capabilities: new Set(config.capabilities)
    });
  }

  async removeServer(id: string): Promise<void> {
    const server = this.servers.get(id);
    if (server) {
      await server.client.disconnect();
      this.servers.delete(id);
    }
  }
}
```

### Request Router
```typescript
class RequestRouter {
  constructor(private serverManager: ServerManager) {}

  async routeRequest(
    method: string,
    params: unknown
  ): Promise<unknown> {
    const servers = this.findCapableServers(method);
    if (servers.length === 0) {
      throw new Error(`No server capable of handling: ${method}`);
    }

    const server = this.selectServer(servers);
    return await server.client.request(method, params);
  }

  private findCapableServers(method: string): Array<{
    id: string;
    client: MCPClient;
  }> {
    // Implementation
  }

  private selectServer(
    servers: Array<{ id: string; client: MCPClient }>
  ): { id: string; client: MCPClient } {
    // Load balancing implementation
  }
}
```

## Resource Integration

### Resource Aggregator
```typescript
class ResourceAggregator {
  async aggregateResources(
    pattern?: string
  ): Promise<Resource[]> {
    const allResources: Resource[] = [];

    for (const server of this.servers.values()) {
      try {
        const resources = await server.client.request(
          'resources/list',
          { pattern }
        );
        allResources.push(...resources);
      } catch (error) {
        console.error(`Error from server ${server.id}:`, error);
      }
    }

    return this.deduplicateResources(allResources);
  }

  private deduplicateResources(
    resources: Resource[]
  ): Resource[] {
    // Deduplication logic
  }
}
```

### Resource Federation
```typescript
class ResourceFederation {
  async federateResource(
    uri: string,
    servers: string[]
  ): Promise<void> {
    const resource = await this.getResource(uri);

    for (const serverId of servers) {
      await this.replicateToServer(serverId, resource);
    }
  }

  private async replicateToServer(
    serverId: string,
    resource: Resource
  ): Promise<void> {
    // Replication logic
  }
}
```

## Tool Integration

### Tool Chain Orchestrator
```typescript
interface ChainStep {
  serverId: string;
  tool: string;
  args: unknown;
  dependencies?: string[];
}

class ToolChainOrchestrator {
  async executeChain(steps: ChainStep[]): Promise<unknown[]> {
    const results: unknown[] = [];
    const context: Record<string, unknown> = {};

    for (const step of steps) {
      if (!this.areDependenciesMet(step, results)) {
        throw new Error('Dependencies not met');
      }

      const result = await this.executeStep(step, context);
      results.push(result);
      this.updateContext(context, result);
    }

    return results;
  }
}
```

## Advanced Integration Patterns

### Event Broadcasting
```typescript
interface EventBroadcaster {
  broadcast(
    event: string,
    data: unknown
  ): Promise<void>;

  subscribe(
    event: string,
    handler: (data: unknown) => void
  ): () => void;
}

class MCPEventBroadcaster implements EventBroadcaster {
  private subscribers = new Map<
    string,
    Set<(data: unknown) => void>
  >();

  async broadcast(
    event: string,
    data: unknown
  ): Promise<void> {
    const handlers = this.subscribers.get(event);
    if (handlers) {
      for (const handler of handlers) {
        try {
          handler(data);
        } catch (error) {
          console.error('Handler error:', error);
        }
      }
    }
  }
}
```

### Health Monitoring
```typescript
interface HealthCheck {
  status: 'healthy' | 'degraded' | 'unhealthy';
  details: Record<string, unknown>;
  timestamp: number;
}

class HealthMonitor {
  private checks = new Map<string, () => Promise<HealthCheck>>();

  async checkHealth(): Promise<Record<string, HealthCheck>> {
    const results: Record<string, HealthCheck> = {};

    for (const [name, check] of this.checks) {
      try {
        results[name] = await check();
      } catch (error) {
        results[name] = {
          status: 'unhealthy',
          details: { error: error.message },
          timestamp: Date.now()
        };
      }
    }

    return results;
  }
}
```

## Best Practices

1. **Server Management**
   - Implement proper server discovery
   - Handle server failures gracefully
   - Support dynamic server addition/removal
   - Monitor server health

2. **Resource Handling**
   - Implement resource federation
   - Handle resource conflicts
   - Support resource versioning
   - Implement proper caching

3. **Tool Integration**
   - Support tool chaining
   - Handle tool dependencies
   - Implement rollback mechanisms
   - Monitor tool execution

4. **Error Handling**
   - Implement circuit breakers
   - Handle partial failures
   - Provide detailed error reporting
   - Support error recovery