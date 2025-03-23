---
description: "Guidelines for starberry"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "Field-of-Dreams-Studio/starberry-rules"
__meta__framework: "Starberry"
__meta__tags: ["Rust","Web Development","Full-stack","Framework","CLI Tools"]
__meta__rate: 8
---
# Starberry Web Framework: Core Essentials

Starberry is a streamlined, Rust-based web framework for building full-stack web applications. Here's a detailed overview of its core components and basic usage:

## 1. Project Structure

A typical Starberry project follows this structure:
```
my_app/
├── src/
│   └── main.rs       # Main application entry point
├── templates/        # HTML templates directory
└── Cargo.toml        # Project dependencies
```

## 2. Key Components

### Application Management

- **App**: Main application container
  ```rust
  // Create and configure an application
  pub static APP: SApp = Lazy::new(|| {
      App::new()
          .binding(String::from("127.0.0.1:3333"))  // Server binding address
          .mode(RunMode::Development)               // Development mode for debugging
          .workers(4)                               // Number of worker threads
          .max_body_size(1024 * 1024 * 10)          // 10MB max request body
          .build()                                  // Build the application
  });
  ```

- **RunMode**: Configures application behavior
  - `Production`: Optimized for production use
  - `Development`: Enhanced error reporting and debugging
  - `Beta`: For pre-release testing

### URL Routing

Starberry offers both macro-based and manual URL registration:

1. **Macro-based Registration**:
   ```rust
   // Absolute URL pattern
   #[lit_url(APP, "/hello")]
   async fn hello_route(_: HttpRequest) -> HttpResponse {
       text_response("Hello, World!")
   }

   // URL tree structure
   static API_URL: SUrl = Lazy::new(|| {
       APP.reg_from(&[LitUrl("api")])
   });

   #[url(API_URL.clone(), LitUrl("users"))]
   async fn users_api(req: HttpRequest) -> HttpResponse {
       // Handle users API endpoint
       json_response(object!({status: "success", users: ["user1", "user2"]}))
   }
   ```

2. **URL Pattern Types**:
   ```rust
   // Literal paths
   LitUrl("exact-match")

   // Regex patterns
   RegUrl("[0-9]+")    // Matches numeric IDs

   // Wildcard patterns
   AnyUrl              // Matches any single path segment
   AnyPath             // Matches any number of path segments
   ```

### Request Handling

```rust
#[lit_url(APP, "/form")]
async fn handle_form(req: HttpRequest) -> HttpResponse {
    // Check request method
    if *req.method() == POST {
        // Extract form data
        if let Some(form) = req.form() {
            let username = form.get("username").unwrap_or("guest");
            return text_response(format!("Hello, {}", username));
        }
    }

    // Return form HTML
    html_response(r#"
        <form method="post">
            <input name="username" placeholder="Username">
            <button type="submit">Submit</button>
        </form>
    "#)
}
```

### Response Generation

```rust
// Text response
text_response("Plain text content")

// HTML response
html_response("<h1>HTML Content</h1>")

// JSON response
json_response(object!({
    status: "success",
    data: {
        id: 123,
        name: "Example"
    }
}))

// Template response
akari_render!(
    "home.html",                  // Template file
    title="My Website",           // Template variables
    user_count=users.len(),
    show_login=true
)
```

## 3. CLI Tools

Starberry includes a command-line tool for project management:

```bash
# Create a new project
starberry new my_app

# Build a project (with template processing)
starberry build

# Run the application
starberry run

# Build for production
starberry release
```

## 4. Basic Application Example

Here's a complete basic example of a Starberry application:

```rust
use starberry::preload::*;

#[tokio::main]
async fn main() {
    APP.clone().run().await;
}

// Application configuration
pub static APP: SApp = Lazy::new(|| {
    App::new()
        .binding(String::from("127.0.0.1:3333"))
        .mode(RunMode::Development)
        .build()
});

// Route handlers
#[lit_url(APP, "/")]
async fn home_route(_: HttpRequest) -> HttpResponse {
    akari_render!(
        "home.html",
        title="Home Page",
        message="Welcome to Starberry!"
    )
}

#[lit_url(APP, "/api/status")]
async fn api_status(_: HttpRequest) -> HttpResponse {
    json_response(object!({
        status: "ok",
        version: "1.0",
        uptime: 3600
    }))
}

// URL tree structure
static USER_URL: SUrl = Lazy::new(|| {
    APP.reg_from(&[LitUrl("users")])
});

#[url(USER_URL.clone(), RegUrl("[0-9]+"))]
async fn user_profile(req: HttpRequest) -> HttpResponse {
    // Get user ID from path
    let user_id = req.path().split('/').last().unwrap_or("0");

    // In a real app, you'd fetch user data from a database
    akari_render!(
        "user.html",
        title="User Profile",
        user_id=user_id
    )
}
```

## 5. Key Benefits

- **Simplified Full-Stack Development**: Integrates routing, request handling, and templating
- **Tree-Structured URLs**: Organized URL hierarchy for better route management
- **Type Safety**: Leverages Rust's strong typing for safer web applications
- **Async Architecture**: Non-blocking I/O with tokio runtime
- **Templating System**: HTML templates with variable substitution and expressions

## 6. Type Aliases

Starberry provides convenient type aliases for common patterns:

```rust
// Static application instance
pub type SApp = Lazy<Arc<App>>;

// Static URL instance
pub type SUrl = Lazy<Arc<Url>>;
```

This overview covers the essential components and usage patterns of the Starberry web framework for building basic web applications.