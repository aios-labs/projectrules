---
description: "MUST update agent memory WHEN new information is received TO enhance decision-making efficiency"
globs: ["**/orchestration/**", "**/agent/**", "**/*memory*/**", "**/agents/**", "**/*agent*/**", "**/memory/**"]
__meta__type: "guideline"
__meta__repo: "krizzo101/arxiv-py-enhanced"
__meta__tags: ["Multi-Agent Systems","Memory Management","Data Persistence","Agent Communication","Decision-Making"]
__meta__rate: 7.5
---
# agent-memory

<version>1.1.0</version>

## Metadata
{
  "rule_id": "1120-agent-memory",
  "taxonomy": {
    "category": "Multi-Agent Systems Rules",
    "parent": "Multi-Agent Systems RulesRule",
    "ancestors": [
      "Rule",
      "Multi-Agent Systems RulesRule"
    ],
    "children": [
      "1121-agent-memory-optimization",
      "1122-agent-memory-retrieval"
    ]
  },
  "tags": [
    "memory management",
    "agent communication",
    "data persistence"
  ],
  "priority": "75",
  "inherits": [
    "000",
    "020",
    "030"
  ]
}

## Overview
{
  "purpose": "MUST ensure that agents update their memory with new information to facilitate better decision-making in multi-agent systems.",
  "application": "This rule SHOULD be applied whenever an agent receives new data, enabling the system to adapt and respond to changing environments and requirements.",
  "importance": "This rule matters as it enhances the overall efficiency of agent interactions and decision-making processes, leading to improved system performance and responsiveness."
}

## memory_update_procedures

{
  "description": "MUST define the procedures for updating agent memory when new information is received, ensuring consistency and reliability.",
  "requirements": [
    "MUST validate new information before updating memory to prevent erroneous data integration.",
    "MUST log all changes made to agent memory for auditing and troubleshooting purposes.",
    "SHOULD notify relevant agents of memory updates to maintain synchronization across the system."
  ]
}

## memory_retrieval_guidelines

{
  "description": "MUST establish guidelines for retrieving information from agent memory efficiently, ensuring quick access to relevant data.",
  "requirements": [
    "MUST implement a caching mechanism to speed up memory retrieval processes.",
    "SHOULD prioritize memory retrieval based on the frequency of information access to optimize performance.",
    "NEVER return stale or outdated information from memory; a freshness check MUST be performed before retrieval."
  ]
}

## memory_management_best_practices

{
  "description": "MUST outline best practices for managing agent memory, including storage, organization, and lifecycle management.",
  "requirements": [
    "MUST categorize memory data to facilitate easier searching and retrieval.",
    "SHOULD implement a memory expiration policy to remove outdated or irrelevant information.",
    "NEVER allow memory overflows; a limit MUST be set to prevent excessive memory usage that could hinder performance."
  ]
}

<example>
Agent Memory Management in a Multi-Agent System

```python
import logging
import json
from typing import Any, Dict, List, Optional

# Configure logging for tracking memory updates
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

class Agent:
    def __init__(self, agent_id: str):
        self.agent_id = agent_id
        self.memory: Dict[str, Any] = {}  # Agent's memory storage

    def update_memory(self, key: str, value: Any) -> None:
        """
        Update agent memory with new information. Validates and logs changes.
        :param key: The key for the memory entry.
        :param value: The new value to be stored.
        """
        if self.validate_data(value):  # Validate new information
            old_value = self.memory.get(key)
            self.memory[key] = value  # Update memory
            logging.info(f'Agent {self.agent_id} updated memory: {key} from {old_value} to {value}')
            self.notify_agents(key, value)  # Notify other agents
        else:
            logging.error(f'Invalid data for key {key}: {value}')

    def validate_data(self, value: Any) -> bool:
        """
        Validate the new data before updating memory.
        :param value: The value to validate.
        :return: True if valid, False otherwise.
        """
        # Example validation: Check for non-empty strings
        return isinstance(value, str) and len(value) > 0

    def notify_agents(self, key: str, value: Any) -> None:
        """
        Notify relevant agents of memory updates. This is a placeholder for actual
        logic that would notify other agents in your system.
        :param key: The key that was updated.
        :param value: The new value.
        """
        logging.info(f'Notifying other agents of update: {key} = {value}')

    def retrieve_memory(self, key: str) -> Optional[Any]:
        """
        Retrieve a value from memory. Implement a freshness check.
        :param key: The key to retrieve.
        :return: The value if found, or None.
        """
        value = self.memory.get(key)
        if value:
            # Example freshness check: Just a placeholder for more complex logic
            logging.info(f'Agent {self.agent_id} retrieved memory: {key} = {value}')
            return value
        logging.warning(f'Key {key} not found in memory')
        return None

# Example usage
if __name__ == '__main__':
    agent = Agent('Agent007')
    agent.update_memory('location', 'Room A')  # Valid update
    agent.update_memory('status', '')  # Invalid update (empty string)
    location = agent.retrieve_memory('location')  # Retrieve memory
    print(f'Retrieved location: {location}')
```

This example demonstrates the 'agent-memory' rule by implementing a simple Agent class that manages its own memory in a multi-agent system. The key components include:

1. **Memory Update Procedures**: The `update_memory` method is responsible for updating the agent's memory when new information is received. It validates the new data through the `validate_data` method to ensure that only valid information is stored. This prevents erroneous data from compromising the agent's decision-making process.

2. **Logging**: Changes to the agent's memory are logged using Python's logging module, allowing for effective auditing and troubleshooting. Each time memory is updated, the old and new values are recorded, providing transparency in memory management.

3. **Notification to Other Agents**: Upon successful memory update, the agent notifies other agents of the change through the `notify_agents` method. This promotes synchronization among agents and ensures that they all have access to the latest data, enhancing collaborative decision-making.

4. **Memory Retrieval Guidelines**: The `retrieve_memory` method allows agents to access their stored information. It also includes a placeholder for a freshness check, ensuring that stale or outdated information is not returned. Logging provides feedback about successful or failed retrieval attempts.

5. **Error Handling**: The example includes error handling for invalid data updates, logging an error message when the data does not pass validation. This ensures that agents can gracefully handle unexpected input without crashing.

6. **Best Practices**: Overall, the example adopts best practices by clearly organizing methods, providing appropriate comments, and implementing logging and validation mechanisms, which are crucial for maintaining reliability and efficiency in multi-agent systems.
</example>

<danger>
{
  "critical_violations": [
    "NEVER allow agents to update their memory with unvalidated information, as this can compromise decision-making integrity.",
    "NEVER omit logging when changes are made to agent memory; failing to log can hinder troubleshooting and auditing efforts.",
    "NEVER ignore notifications to relevant agents after a memory update, as this can lead to synchronization issues.",
    "NEVER return outdated or stale information from memory; a freshness check MUST be performed before any retrieval.",
    "NEVER permit memory overflows; a limit on memory usage MUST be enforced to maintain system performance."
  ],
  "specific_risks": [
    "Failing to validate memory updates can result in incorrect data being stored, leading to poor decision-making and potential system failures.",
    "Without logging memory changes, it becomes difficult to trace back issues, making debugging and system audits virtually impossible.",
    "Ignoring notifications to other agents can lead to discrepancies in agent states, resulting in miscommunication and ineffective collaboration.",
    "Returning stale information can cause agents to act on outdated data, potentially resulting in wrong actions or decisions being made based on incorrect context.",
    "Allowing memory overflows can cause performance degradation, leading to slow response times or crashes, ultimately affecting the entire multi-agent system."
  ]
}
</danger>