---
description: "Guidelines for propose-before-implementing"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "Shankhara/rosruc_settings"
__meta__tags: ["Code Quality","Technical Alignment","Proposal Process","Typescript","Javascript"]
__meta__rate: 7
---

# Proposition avant implémentation

## Context
- Avant toute modification de code significative (>10 lignes)
- Lors de l'introduction d'un nouveau pattern ou approche
- Pour les changements d'architecture ou de structure de données

## Requirements
- Présenter une proposition structurée avec sections "Approche" et "Bénéfices"
- Inclure au moins 3 points spécifiques justifiant l'approche proposée
- Décrire les alternatives envisagées et pourquoi elles ont été écartées
- Lister les fichiers qui seront impactés
- Attendre une validation explicite avant implémentation
- Signaler les changements breaking potentiels

## Examples
<example>
Proposition d'implémentation:

**Approche**:
- Utiliser un hook personnalisé pour centraliser la logique de filtrage
- Extraire les fonctions de transformation dans un fichier utils
- Implémenter le pattern "render props" pour le composant de liste

**Bénéfices**:
- Réduction de 30% de la duplication de code
- Amélioration de la testabilité avec des fonctions pures
- Flexibilité accrue pour les cas d'utilisation futurs

**Alternatives considérées**:
- HOC: plus verbeux et moins flexible avec TypeScript
- Context API: trop lourd pour cette fonctionnalité spécifique

**Fichiers impactés**:
- src/components/List.tsx
- src/hooks/useFilter.tsx (nouveau)
- src/utils/transformations.ts (nouveau)
</example>

<example type="invalid">
Je vais modifier le composant List pour ajouter la fonctionnalité de filtrage.
</example>