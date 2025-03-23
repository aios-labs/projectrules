---
description: "ENFORCE consistent code style and formatting standards across Rust files"
globs: ["**/*.rs"]
__meta__type: "guideline"
__meta__repo: "DataScienceBioLab/squirrel"
__meta__tags: ["Rust","Code Style","Formatting","Best Practices","Development"]
__meta__rate: 9
---
# Rust Code Style Standards

## Context
- When writing Rust code
- When formatting Rust files
- When organizing Rust modules
- When naming Rust items

## Requirements
- Follow Rust naming conventions
- Use consistent formatting
- Follow module organization rules
- Use appropriate visibility modifiers
- Document public interfaces
- Follow type annotation guidelines
- Use appropriate attributes
- Follow import ordering rules
- Use consistent spacing
- Follow comment style guidelines

## Examples
<example>
// Good: Well-formatted and styled code
use std::collections::HashMap;
use std::sync::Arc;

/// A configuration manager that handles application settings.
///
/// # Examples
///
/// ```
/// let config = ConfigManager::new();
/// config.set("key", "value");
/// assert_eq!(config.get("key"), Some("value"));
/// ```
#[derive(Debug, Clone)]
pub struct ConfigManager {
    settings: Arc<HashMap<String, String>>,
}

impl ConfigManager {
    /// Creates a new configuration manager with default settings.
    pub fn new() -> Self {
        Self {
            settings: Arc::new(HashMap::new()),
        }
    }

    /// Sets a configuration value.
    ///
    /// # Arguments
    ///
    /// * `key` - The configuration key
    /// * `value` - The value to set
    pub fn set(&mut self, key: impl Into<String>, value: impl Into<String>) {
        Arc::make_mut(&mut self.settings)
            .insert(key.into(), value.into());
    }

    /// Gets a configuration value.
    pub fn get(&self, key: &str) -> Option<&str> {
        self.settings.get(key).map(String::as_str)
    }
}

// Good: Proper module organization
mod config {
    mod manager;
    mod parser;
    mod validator;

    pub use self::manager::ConfigManager;
    pub use self::parser::ConfigParser;
    pub use self::validator::ConfigValidator;
}
</example>

<example type="invalid">
// Bad: Poor formatting and style
use std::collections::HashMap;use std::sync::Arc;

struct config_manager{
    Settings:HashMap<String,String>
}

impl config_manager{
    fn New()->Self{
        Self{Settings:HashMap::new()}
    }

    fn Set(&mut self,Key:String,Value:String){
        self.Settings.insert(Key,Value);
    }

    fn get(&self,key:&str)->Option<&str>{
        self.Settings.get(key).map(|s|s.as_str())
    }
}

// Bad: Inconsistent visibility and naming
mod Config {
    pub struct Manager {
        pub settings: HashMap<String, String>, // Should be private
    }

    impl Manager {
        fn NEW() -> Self { // Inconsistent naming
            Self {
                settings: HashMap::new()
            }
        }
    }
}
</example>

## Best Practices
1. Use rustfmt
2. Follow naming conventions
3. Document public items
4. Use consistent spacing
5. Organize imports properly
6. Use appropriate visibility
7. Follow module structure
8. Use type annotations
9. Write clear comments
10. Use consistent style

## Technical Metadata
- Category: Rust Style
- Priority: High
- Dependencies:
  - rustfmt
  - clippy
  - rust-analyzer
- Validation Requirements:
  - Style compliance
  - Format verification
  - Documentation standards

<version>1.0</version>