---
description: "MCP Server - MemoryMesh"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "GiGiDKR/OhMyCursorRules"
__meta__tags: ["AI","Knowledge Graph","Data Management","Schema Design","Structured Data"]
__meta__rate: 8
---
# MemoryMesh

## Overview

MemoryMesh is a local knowledge graph server that empowers you to build and manage structured information for AI models. While particularly well-suited for text-based RPGs, its adaptable design makes it useful for various applications, including social network simulations, organizational planning, or any scenario involving structured data.

### Key Features

*   **Dynamic Schema-Based Tools:** Define your data structure with schemas, and MemoryMesh automatically generates tools for adding, updating, and deleting data.
*   **Intuitive Schema Design:** Create schemas that guide the AI in generating and connecting nodes, using required fields, enumerated types, and relationship definitions.
*   **Metadata for AI Guidance:**  Use metadata to provide context and structure, helping the AI understand the meaning and relationships within your data.
*   **Relationship Handling:** Define relationships within your schemas to encourage the AI to create connections (edges) between related data points (nodes).
*   **Informative Feedback:**  Provides error feedback to the AI, enabling it to learn from mistakes and improve its interactions with the knowledge graph.
*   **Event Support:** An event system tracks operations, providing insights into how the knowledge graph is being modified.

#### Nodes

Nodes represent entities or concepts within the knowledge graph. Each node has:

* `name`: A unique identifier.
* `nodeType`: The type of the node (e.g., `npc`, `artifact`, `location`), defined by your schemas.
* `metadata`: An array of strings providing descriptive details about the node.
* `weight`: (Optional) A numerical value between 0 and 1 representing the strength of the relationship, defaulting to 1.

**Example Node:**

```json
    {
      "name": "Aragorn",
      "nodeType": "player_character",
      "metadata": [
        "Race: Human",
        "Class: Ranger",
        "Skills: Tracking, Swordsmanship",
        "Affiliation: Fellowship of the Ring"
      ]
    }
```

#### Edges

Edges represent relationships between nodes. Each edge has:

* `from`: The name of the source node.
* `to`: The name of the target node.
* `edgeType`: The type of relationship (e.g., `owns`, `located_in`).

```json
{
  "from": "Aragorn",
  "to": "Andúril",
  "edgeType": "owns"
}
```

#### Schemas

Schemas are the heart of MemoryMesh. They define the structure of your data and drive the automatic generation of tools.

##### Schema File Location

Place your schema files (`.schema.json`) in the `dist/data/schemas` directory of your built MemoryMesh project. MemoryMesh will automatically detect and process these files on startup.

##### Schema Structure

File name: `[name].schema.json`. For example, for a schema defining an 'npc', the filename would be `add_npc.schema.json`.

* `name` - Identifier for the schema and node type within the memory. **IMPORTANT**: The schema’s name *must* start with `add_` to be recognized.
* `description` - Used as the description for the `add_<name>` tool, providing context for the AI. *(The `delete` and `update` tools have a generic description)*
* `properties` - Each property includes its type, description, and additional constraints.
    * `property`
        * `type` - Supported values are `string` or `array`.
        * `description` - Helps guide the AI on the entity’s purpose.
        * `required` - Boolean. If `true`, the **AI is forced** to provide this property when creating a node.
        * `enum` - An array of strings. If present, the **AI must choose** one of the given options.
        * `relationship` - Defines a connection to another node. If a property is required and has a relationship, the **AI will always create** both the node and the corresponding edge.
            * `edgeType` - Type of the relationship to be created.
            * `description` - Helps guide the AI on the relationship’s purpose.
* `additionalProperties` - Boolean. If `true`, allows the AI to add extra attributes beyond those defined as required or optional.

##### Example Schema (add_npc.schema.json):

```json
{
  "name": "add_npc",
  "description": "Schema for adding an NPC to the memory" ,
  "properties": {
    "name": {
      "type": "string",
      "description": "A unique identifier for the NPC",
      "required": true
    },
    "race": {
      "type": "string",
      "description": "The species or race of the NPC",
      "required": true,
      "enum": [
        "Human",
        "Elf",
        "Dwarf",
        "Orc",
        "Goblin"
      ]
    },
    "currentLocation": {
      "type": "string",
      "description": "The current location of the NPC",
      "required": true,
      "relationship": {
        "edgeType": "located_in",
        "description": "The current location of the NPC"
      }
    }
  },
  "additionalProperties": true
}
```

Based on this schema, MemoryMesh automatically creates:
* add_npc: To add new NPC nodes.
* update_npc: To modify existing NPC nodes.
* delete_npc: To remove NPC nodes.