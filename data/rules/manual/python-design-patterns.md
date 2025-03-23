---
description: "Standards for Python design patterns implementation"
globs: ["**/*.py"]
__meta__type: "guideline"
__meta__repo: "ramiluisto/CLIP_for_semiotics"
__meta__tags: ["Python","Design Patterns","Software Architecture","Programming Standards","Best Practices"]
__meta__rate: 8
---
# Python Design Patterns Standards

<rule>
name: python_design_patterns
description: Guidelines for implementing common design patterns in Python
filters:
  - type: file_extension
    pattern: "\.py$"

actions:
  - type: suggest
    message: |
      ## Python Design Patterns Guidelines

      ### Creational Patterns
      1. Singleton:
         ```python
         class Singleton:
             _instance = None

             def __new__(cls, *args, **kwargs):
                 if cls._instance is None:
                     cls._instance = super().__new__(cls)
                 return cls._instance
         ```
         - Use sparingly - often better alternatives exist
         - Consider using module-level variables instead
         - For thread safety, use locks or metaclasses

      2. Factory Method:
         ```python
         class Creator:
             def factory_method(self):
                 raise NotImplementedError

             def operation(self):
                 product = self.factory_method()
                 return product.operation()

         class ConcreteCreator(Creator):
             def factory_method(self):
                 return ConcreteProduct()
         ```
         - Use when object creation logic should be separate from usage
         - Consider using class methods as factories
         - Leverage Python's dynamic typing for flexibility

      3. Builder:
         ```python
         class Product:
             def __init__(self):
                 self.parts = []

         class Builder:
             def __init__(self):
                 self.product = Product()

             def build_part_a(self):
                 self.product.parts.append("Part A")
                 return self

             def build_part_b(self):
                 self.product.parts.append("Part B")
                 return self

             def get_result(self):
                 return self.product
         ```
         - Use for complex object construction
         - Consider using method chaining for fluent interfaces
         - In Python, often simplified with keyword arguments

      ### Structural Patterns
      1. Adapter:
         ```python
         class Target:
             def request(self):
                 pass

         class Adaptee:
             def specific_request(self):
                 return "Specific behavior"

         class Adapter(Target):
             def __init__(self, adaptee):
                 self.adaptee = adaptee

             def request(self):
                 return f"Adapted: {self.adaptee.specific_request()}"
         ```
         - Use to make incompatible interfaces work together
         - Consider using multiple inheritance when appropriate
         - Can be implemented with functions in Python

      2. Decorator:
         ```python
         class Component:
             def operation(self):
                 pass

         class ConcreteComponent(Component):
             def operation(self):
                 return "Basic operation"

         class Decorator(Component):
             def __init__(self, component):
                 self.component = component

             def operation(self):
                 return self.component.operation()

         class ConcreteDecorator(Decorator):
             def operation(self):
                 return f"Enhanced: {super().operation()}"
         ```
         - Use Python's built-in decorator syntax when possible
         - Consider using functools.wraps for function decorators
         - Class decorators can modify class behavior

      3. Composite:
         ```python
         from abc import ABC, abstractmethod

         class Component(ABC):
             @abstractmethod
             def operation(self):
                 pass

         class Leaf(Component):
             def operation(self):
                 return "Leaf operation"

         class Composite(Component):
             def __init__(self):
                 self.children = []

             def add(self, component):
                 self.children.append(component)

             def operation(self):
                 results = []
                 for child in self.children:
                     results.append(child.operation())
                 return f"Composite: {', '.join(results)}"
         ```
         - Use for tree-like object structures
         - Consider using collections.abc interfaces
         - Implement appropriate iteration methods

      ### Behavioral Patterns
      1. Observer:
         ```python
         class Subject:
             def __init__(self):
                 self._observers = []

             def attach(self, observer):
                 self._observers.append(observer)

             def detach(self, observer):
                 self._observers.remove(observer)

             def notify(self):
                 for observer in self._observers:
                     observer.update(self)

         class Observer:
             def update(self, subject):
                 pass
         ```
         - Consider using Python's built-in Observer pattern alternatives:
           - Event hooks
           - Callback functions
           - Signal/slot mechanisms (e.g., PyQt)

      2. Strategy:
         ```python
         class Context:
             def __init__(self, strategy):
                 self._strategy = strategy

             def set_strategy(self, strategy):
                 self._strategy = strategy

             def execute_strategy(self, data):
                 return self._strategy.execute(data)

         class Strategy:
             def execute(self, data):
                 pass
         ```
         - In Python, often simplified using callable objects or functions
         - Consider using function parameters instead of strategy classes
         - Leverage higher-order functions when appropriate

      3. Command:
         ```python
         class Command:
             def execute(self):
                 pass

         class ConcreteCommand(Command):
             def __init__(self, receiver):
                 self._receiver = receiver

             def execute(self):
                 self._receiver.action()

         class Invoker:
             def __init__(self):
                 self._command = None

             def set_command(self, command):
                 self._command = command

             def execute_command(self):
                 self._command.execute()
         ```
         - In Python, often simplified using callable objects
         - Consider using higher-order functions
         - Use for undo/redo functionality or command queuing

      ### Python-Specific Patterns
      1. Context Manager:
         ```python
         class ResourceManager:
             def __init__(self, resource):
                 self.resource = resource

             def __enter__(self):
                 # Setup code
                 return self.resource

             def __exit__(self, exc_type, exc_val, exc_tb):
                 # Cleanup code
                 self.resource.close()
                 return False  # Re-raise exceptions
         ```
         - Use for resource management (files, connections, locks)
         - Consider using contextlib.contextmanager for function-based approach
         - Always handle exceptions properly in __exit__

      2. Descriptor:
         ```python
         class Descriptor:
             def __get__(self, instance, owner):
                 # Return computed or stored value

             def __set__(self, instance, value):
                 # Validate and store value

             def __delete__(self, instance):
                 # Cleanup
         ```
         - Use for attribute access control
         - Consider using property for simple cases
         - Useful for validation, caching, and computed attributes

      ### Anti-Patterns to Avoid
      1. God Object:
         - Classes that know or do too much
         - Violates single responsibility principle
         - Refactor into smaller, focused classes

      2. Spaghetti Code:
         - Tangled, unstructured code flow
         - Use proper function decomposition
         - Follow @python-code-organization guidelines

      3. Reinventing the Wheel:
         - Reimplementing standard library functionality
         - Use built-in modules and functions
         - Leverage established third-party packages

      ### Related Guidelines
      - For code organization, see @python-code-organization
      - For refactoring techniques, see @python-refactoring
      - For API design, see @python-api-design

examples:
  - input: |
      # Bad: Complex creation logic mixed with business logic
      def process_data(data_type, source):
          if data_type == "csv":
              processor = CSVProcessor(source)
          elif data_type == "json":
              processor = JSONProcessor(source)
          elif data_type == "xml":
              processor = XMLProcessor(source)
          else:
              raise ValueError(f"Unsupported data type: {data_type}")

          return processor.process()

      # Good: Factory pattern
      class ProcessorFactory:
          @classmethod
          def create(cls, data_type, source):
              processors = {
                  "csv": CSVProcessor,
                  "json": JSONProcessor,
                  "xml": XMLProcessor
              }

              processor_class = processors.get(data_type)
              if not processor_class:
                  raise ValueError(f"Unsupported data type: {data_type}")

              return processor_class(source)

      # Usage
      processor = ProcessorFactory.create(data_type, source)
      result = processor.process()

      # Bad: Resource management without context manager
      def process_file(path):
          f = open(path, 'r')
          try:
              data = f.read()
              return process_data(data)
          finally:
              f.close()

      # Good: Using context manager
      def process_file(path):
          with open(path, 'r') as f:
              data = f.read()
              return process_data(data)

metadata:
  priority: high
  version: 1.0
  tags: ["python", "design-patterns", "architecture", "best-practices"]
</rule>