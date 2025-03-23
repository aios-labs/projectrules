---
description: "Guidelines for service-oriented-architecture"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "jam3gw/agentic-service-bot"
__meta__tags: ["Service-Oriented Architecture","Best Practices","Software Design","Error Handling","Dependency Injection"]
__meta__rate: 8
---
# Service-Oriented Architecture Best Practices

This rule enforces best practices for service-oriented architecture in the Agentic Service Bot project.

<rule>
name: service_oriented_architecture
description: Enforce best practices for service-oriented architecture
filters:
  - type: file_extension
    pattern: "\\.py$|\\.ts$|\\.tsx$|\\.js$|\\.jsx$"
  - type: content
    pattern: "(?:class|function|const)\\s+[a-zA-Z0-9_]+(?:Service|Analyzer|Processor|Handler)"

actions:
  - type: suggest
    conditions:
      # If implementing a service without proper separation of concerns
      - pattern: "class\\s+[a-zA-Z0-9_]+Service\\s*(?:\\([^)]*\\))?\\s*:\\s*(?!\\s*[\"'])\\s*\\S+"
        message: "Ensure service has a single responsibility and clear interface"
      # If implementing a handler without proper error handling
      - pattern: "def\\s+[a-zA-Z0-9_]+_handler\\s*\\([^)]*\\)\\s*(?:->\\s*[^:]+)?\\s*:\\s*(?!\\s*[\"'])\\s*\\S+"
        message: "Implement proper error handling in service handlers"
    message: |
      ## Service-Oriented Architecture Best Practices

      Follow these guidelines for service-oriented architecture:

      1. **Single Responsibility Principle**: Each service should have a single, well-defined responsibility

      2. **Clear Service Boundaries**: Define clear interfaces between services

      3. **Service Level Awareness**: Services should respect customer service level permissions

      4. **Proper Error Handling**: Implement comprehensive error handling in all services

      5. **Consistent Logging**: Use consistent logging patterns across services

      6. **Feature Flagging**: Implement feature flags for service-level-dependent features

      7. **Dependency Injection**: Use dependency injection to make services testable

      8. **Stateless Services**: Design services to be stateless when possible

      9. **Idempotent Operations**: Ensure operations can be safely retried

      10. **Graceful Degradation**: Services should degrade gracefully when dependencies fail

      ### Example Implementation:
      ```python
      class CustomerService:
          """Service for customer-related operations.

          Responsible for retrieving and managing customer data.
          """

          def __init__(self, db_service):
              """Initialize with dependency injection for testability.

              Args:
                  db_service: Database service for data access
              """
              self.db_service = db_service
              self.logger = logging.getLogger(__name__)

          def get_customer(self, customer_id):
              """Get customer by ID with proper error handling.

              Args:
                  customer_id: Unique identifier for the customer

              Returns:
                  Customer object if found

              Raises:
                  CustomerNotFoundError: If customer doesn't exist
                  DatabaseError: If database operation fails
              """
              try:
                  customer_data = self.db_service.get_item(
                      table_name="customers",
                      key={"id": customer_id}
                  )

                  if not customer_data:
                      self.logger.warning(f"Customer not found: {customer_id}")
                      raise CustomerNotFoundError(f"Customer {customer_id} not found")

                  return Customer(**customer_data)

              except Exception as e:
                  self.logger.error(f"Database error retrieving customer {customer_id}: {str(e)}")
                  raise DatabaseError(f"Failed to retrieve customer: {str(e)}")

          def can_perform_action(self, customer, action_type):
              """Check if customer can perform an action based on service level.

              Args:
                  customer: Customer object
                  action_type: Type of action to check

              Returns:
                  Boolean indicating if action is allowed
              """
              try:
                  service_level = self.db_service.get_item(
                      table_name="service_levels",
                      key={"level": customer.service_level}
                  )

                  return action_type in service_level.get("allowed_actions", [])

              except Exception as e:
                  self.logger.error(f"Error checking permissions: {str(e)}")
                  # Default to False for safety
                  return False
      ```

examples:
  - input: |
      # Bad: Monolithic service with mixed responsibilities
      class SmartHomeService:
          def __init__(self, db_client):
              self.db_client = db_client

          def get_customer(self, customer_id):
              return self.db_client.get_item(table="customers", key={"id": customer_id})

          def process_request(self, customer_id, request_text):
              customer = self.get_customer(customer_id)
              # Process request logic mixed with customer retrieval
              response = self.generate_response(request_text, customer)
              return response

          def generate_response(self, request_text, customer):
              # AI response generation logic mixed in
              return "Response to: " + request_text
    output: |
      # Good: Separated services with clear responsibilities
      class CustomerService:
          """Service for customer-related operations."""

          def __init__(self, db_client):
              self.db_client = db_client
              self.logger = logging.getLogger(__name__)

          def get_customer(self, customer_id):
              """Get customer by ID with proper error handling."""
              try:
                  customer_data = self.db_client.get_item(
                      table="customers",
                      key={"id": customer_id}
                  )

                  if not customer_data:
                      self.logger.warning(f"Customer not found: {customer_id}")
                      raise CustomerNotFoundError(f"Customer {customer_id} not found")

                  return Customer(**customer_data)

              except Exception as e:
                  self.logger.error(f"Database error: {str(e)}")
                  raise DatabaseError(f"Failed to retrieve customer: {str(e)}")


      class RequestProcessorService:
          """Service for processing customer requests."""

          def __init__(self, customer_service, response_service):
              self.customer_service = customer_service
              self.response_service = response_service
              self.logger = logging.getLogger(__name__)

          def process_request(self, customer_id, request_text):
              """Process a customer request with proper error handling."""
              try:
                  # Get customer using the dedicated service
                  customer = self.customer_service.get_customer(customer_id)

                  # Generate response using the dedicated service
                  response = self.response_service.generate_response(request_text, customer)
                  return response

              except CustomerNotFoundError as e:
                  self.logger.error(f"Customer error: {str(e)}")
                  return f"Error: {str(e)}"

              except Exception as e:
                  self.logger.error(f"Unexpected error: {str(e)}")
                  return "Sorry, an unexpected error occurred."

metadata:
  priority: high
  version: 1.0
</rule>