---
description: "Dice notation syntax reference for the D&D Dice extension"
globs: "**/D-D-Dice/** /*.{js,json}, **/dice/**/*.{js,json}"
__meta__type: "guideline"
__meta__repo: "Maggotin/D-D-Dice"
__meta__tags: ["D&D","Dice Notation","Tabletop RPG","Syntax","Gaming"]
__meta__rate: 7.5
---

# D&D Dice Notation Syntax
# Comprehensive reference for dice notation in tabletop RPG systems

<rule>
name: dice_notation_syntax
description: Reference guide for standard and advanced dice notation used in D&D and other tabletop RPGs
filters:
  - type: content
    pattern: "(?i)(d\\d+|\\d+d\\d+|dice roll|dice notation)"
  - type: event
    pattern: "code_change|user_query"
actions:
  - type: suggest
    message: |
      # D&D Dice Notation Reference

      ## 1. Basic Dice Notation

      ### 1.1 Standard Format
      ```
      NdS
      ```
      Where:
      - `N` is the number of dice to roll (optional, defaults to 1 if omitted)
      - `d` is the delimiter indicating a die roll
      - `S` is the number of sides on each die

      ### 1.2 Common Dice Types
      - `d4` - 4-sided die (tetrahedron)
      - `d6` - 6-sided die (cube)
      - `d8` - 8-sided die (octahedron)
      - `d10` - 10-sided die (pentagonal trapezohedron)
      - `d12` - 12-sided die (dodecahedron)
      - `d20` - 20-sided die (icosahedron)
      - `d100` - 100-sided die (percentile, often rolled as d10×10 + d10)

      ## 2. Advanced Notation

      ### 2.1 Modifiers
      ```
      NdS+M   // Add modifier M to the result
      NdS-M   // Subtract modifier M from the result
      ```

      ### 2.2 Multiple Dice Groups
      ```
      NdS+MdT   // Roll N S-sided dice and M T-sided dice, then sum the results
      ```

      ### 2.3 Combining Operations
      ```
      NdS+MdT+X   // Roll dice and add a fixed value
      NdS+MdT-X   // Roll dice and subtract a fixed value
      ```

      ## 3. Usage Examples
      - `2d6+3` - Roll two 6-sided dice and add 3 to the result
      - `1d20+5` - Roll one 20-sided die and add 5 (common for D&D ability checks)
      - `3d6+2d4` - Roll three 6-sided dice and two 4-sided dice, then sum all results
      - `1d8-2` - Roll one 8-sided die and subtract 2 from the result

      ## 4. SillyTavern Integration

      ### 4.1 Slash Commands
      ```
      /roll 2d6       // Roll two 6-sided dice
      /r 1d20+5       // Short alias for roll command
      /roll 3d8 quiet:true  // Roll dice without displaying in chat
      ```

      ### 4.2 Function Calling
      ```json
      {
        "name": "RollTheDice",
        "parameters": {
          "who": "Character name",
          "formula": "2d6+3"
        }
      }
      ```

      ## 5. Error Handling
      Invalid dice formulas will display a warning toast notification. Examples of invalid formulas:
      - `2d0` - Dice must have at least 1 side
      - `0d6` - Must roll at least 1 die
      - `d%` - Special characters not supported
      - `2d6!` - Exploding dice not supported
      - `2d6k1` - Keep/drop notation not supported

examples:
  - input: |
      "How do I use the D&D Dice extension in SillyTavern?"
    output: |
      The D&D Dice extension for SillyTavern allows you to roll virtual dice using standard tabletop RPG notation:

      ```
      /roll 2d6       // Roll two 6-sided dice
      /r 1d20+5       // Short alias for roll command with modifier
      ```

      The extension supports all standard D&D dice (d4, d6, d8, d10, d12, d20, d100) and complex formulas like "2d6+3d8+5".

      Results appear in chat with a visual dice animation, and can be configured to be visible only to you with the quiet parameter.

  - input: |
      "What dice formulas can I use with the D&D Dice extension?"
    output: |
      The D&D Dice extension for SillyTavern supports these dice notation formats:

      1. Basic rolls: `d20`, `2d6`, `3d8`
      2. Rolls with modifiers: `1d20+5`, `2d6-2`
      3. Multiple dice groups: `2d6+1d8`, `1d20+2d4+1d6`
      4. Combined operations: `2d6+1d8+3`, `1d20+2d4-2`

      All standard D&D dice are supported: d4, d6, d8, d10, d12, d20, and d100.

      Example: For a D&D attack roll with a +7 bonus, use: `/roll 1d20+7`

  - input: |
      "How can I implement the D&D Dice extension in my SillyTavern setup?"
    output: |
      To implement the D&D Dice extension in your SillyTavern setup:

      1. Install the extension from the Extensions menu in SillyTavern
      2. Enable it in your active extensions
      3. Use slash commands in chat:
         ```
         /roll 2d6       // Basic roll
         /r 1d20+5       // Short form with modifier
         ```

      For AI function calling integration, the extension registers this function:
      ```json
      {
        "name": "RollTheDice",
        "parameters": {
          "who": "Character name",
          "formula": "2d6+3"
        }
      }
      ```

      This allows AI models with function calling to trigger dice rolls during conversations.

metadata:
  priority: high
  version: 1.0
  tags:
    - dice
    - d&d
    - tabletop-rpg
    - sillyTavern-extension
    - dice-notation
</rule>