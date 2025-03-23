---
description: "Guidelines for 1014-rust-port-management"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "DataScienceBioLab/squirrel"
__meta__tags: ["Rust","Port Management","Security","Validation","Resource Management"]
__meta__rate: 7
---

# Rust Port Management Standards

## Context
- When managing network ports
- When implementing network services
- When handling port allocation
- When managing port resources

## Requirements
- Use appropriate port validation
- Implement proper port security
- Use appropriate port ranges
- Document port usage
- Implement proper error handling
- Use appropriate port binding
- Follow security best practices
- Document port requirements
- Implement proper cleanup
- Use appropriate port allocation

## Examples
<example>
// Good: Well-structured port management
use std::net::{TcpListener, SocketAddr};
use thiserror::Error;
use tracing::{info, warn, error, instrument};

#[derive(Debug, Error)]
pub enum PortError {
    #[error("Port {0} is already in use")]
    PortInUse(u16),

    #[error("Invalid port number: {0}")]
    InvalidPort(u16),

    #[error("Failed to bind to port: {0}")]
    BindError(#[from] std::io::Error),
}

pub struct PortManager {
    allocated_ports: Vec<u16>,
    min_port: u16,
    max_port: u16,
}

impl PortManager {
    pub fn new(min_port: u16, max_port: u16) -> Self {
        Self {
            allocated_ports: Vec::new(),
            min_port,
            max_port,
        }
    }

    #[instrument(skip(self))]
    pub fn allocate_port(&mut self) -> Result<u16, PortError> {
        for port in self.min_port..=self.max_port {
            if !self.allocated_ports.contains(&port) {
                match self.try_bind_port(port) {
                    Ok(_) => {
                        info!(port = port, "Port allocated successfully");
                        self.allocated_ports.push(port);
                        return Ok(port);
                    }
                    Err(e) => {
                        warn!(port = port, error = %e, "Failed to bind port");
                        continue;
                    }
                }
            }
        }

        error!("No available ports in range");
        Err(PortError::PortInUse(self.max_port))
    }

    fn try_bind_port(&self, port: u16) -> Result<(), PortError> {
        if port < self.min_port || port > self.max_port {
            return Err(PortError::InvalidPort(port));
        }

        let addr = SocketAddr::from(([127, 0, 0, 1], port));
        match TcpListener::bind(addr) {
            Ok(_) => Ok(()),
            Err(e) => Err(PortError::BindError(e)),
        }
    }

    pub fn release_port(&mut self, port: u16) {
        if let Some(index) = self.allocated_ports.iter().position(|&p| p == port) {
            self.allocated_ports.remove(index);
            info!(port = port, "Port released");
        }
    }
}

// Good: Safe port binding with validation
pub struct ServiceListener {
    listener: TcpListener,
    port: u16,
}

impl ServiceListener {
    #[instrument]
    pub fn new(port: u16) -> Result<Self, PortError> {
        if port < 1024 {
            error!(port = port, "Attempted to use privileged port");
            return Err(PortError::InvalidPort(port));
        }

        let addr = SocketAddr::from(([127, 0, 0, 1], port));
        match TcpListener::bind(addr) {
            Ok(listener) => {
                info!(port = port, "Service listener created");
                Ok(Self { listener, port })
            }
            Err(e) => {
                error!(port = port, error = %e, "Failed to create service listener");
                Err(PortError::BindError(e))
            }
        }
    }
}
</example>

<example type="invalid">
// Bad: Poor port management
struct UnsafePortManager {
    ports: Vec<u16>,
}

impl UnsafePortManager {
    // Bad: No port validation
    fn allocate_port(&mut self) -> u16 {
        let port = 8080; // Hard-coded port
        self.ports.push(port);
        port
    }

    // Bad: No error handling
    fn bind_port(&self, port: u16) {
        let addr = format!("127.0.0.1:{}", port);
        TcpListener::bind(addr).unwrap(); // Unsafe unwrap
    }

    // Bad: No cleanup
    fn release_port(&mut self, port: u16) {
        // No validation
        // No proper cleanup
        self.ports.retain(|&p| p != port);
    }
}

// Bad: Unsafe port binding
fn create_listener() -> TcpListener {
    // Bad: Using privileged port
    let port = 80;

    // Bad: No validation
    // Bad: No error handling
    TcpListener::bind(("0.0.0.0", port)).unwrap()
}
</example>

## Best Practices
1. Validate port numbers
2. Handle port conflicts
3. Use appropriate ranges
4. Implement proper cleanup
5. Log port operations
6. Handle errors properly
7. Document port usage
8. Follow security rules
9. Monitor port status
10. Manage resources properly

## Technical Metadata
- Category: Rust Networking
- Priority: High
- Dependencies:
  - tokio = { version = "1.0", features = ["net"] }
  - socket2 = "0.5"
  - port_scanner = "0.1"
- Validation Requirements:
  - Port validation
  - Security checks
  - Resource management

<version>1.0</version>