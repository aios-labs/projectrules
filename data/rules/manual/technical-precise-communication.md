---
description: "Guidelines for technical-precise-communication"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "Shankhara/rosruc_settings"
__meta__tags: ["Technical Communication","Code Review","Documentation","Best Practices","Software Development"]
__meta__rate: 7
---
---
description: Communiquer avec précision technique en utilisant une terminologie exacte et des références spécifiques au contexte du projet
globs: **/*.{js,jsx,ts,tsx,md}
---

# Communication technique précise

## Context
- Dans les revues de code et discussions techniques
- Pour la documentation des décisions architecturales
- Lors de l'explication des approches proposées

## Requirements
- Utiliser une terminologie technique précise et cohérente
- Référencer des concepts, patterns ou principes spécifiques plutôt que des généralités
- Structurer les explications de façon logique (problème → approches → solution → justification)
- Utiliser des preuves concrètes plutôt que des opinions (performances mesurées, non ressenties)
- Donner des références à des parties spécifiques du code (numéros de ligne, noms de fichiers)
- Éviter le jargon non spécifique ou les métaphores ambiguës

## Examples
<example>
**Communication technique précise**:

"L'implémentation actuelle du composant `OrderList` présente un problème de performance lié à des re-rendus excessifs. Analyse:

1. **Identification du problème**: Les logs de performance React DevTools montrent que chaque mise à jour d'état dans le parent `OrderPage` déclenche 200+ re-rendus des items enfants, même si les props n'ont pas changé.

2. **Approches évaluées**:
   - Mémoisation avec React.memo: Simple mais ne résout pas les problèmes de référence
   - Virtualisation avec FlatList: Efficace mais nécessite une refonte de la structure
   - Stratégie d'immutabilité avec Immer: Résout le problème de référence sans changement structurel

3. **Solution proposée**: Implémenter Immer dans le reducer d'orders pour garantir l'immutabilité tout en préservant l'identité des références non modifiées, puis appliquer React.memo sur OrderItem.

4. **Résultats attendus**: Réduction de 80% des re-rendus inutiles basée sur les tests de performance initiaux."
</example>

<example type="invalid">
**Communication imprécise**:

"Le code est lent et plein de bugs. On devrait tout refaire avec une approche plus moderne et meilleure. J'ai vu ça dans un projet précédent et ça marchait super bien."
</example>