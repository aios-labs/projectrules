---
description: "Reactコンポーネントの型定義規約"
globs: "*.tsx"
__meta__type: "guideline"
__meta__repo: "CAPHTECH/realmix-chat"
__meta__framework: "React"
__meta__tags: ["React","TypeScript","Component Design","Type Safety","Best Practices"]
__meta__rate: 8
---
# Reactコンポーネントの型定義規約

## コンポーネントの型定義

### React.FC の使用を避ける

- `React.FC` や `FC` 型の使用は避け、代わりに明示的な型定義を使用する
- 理由：
  - `FC` は暗黙的に `children` プロパティを含むため、不要な場合でも型定義上で許可されてしまう
  - 型の明示性が低く、コードの意図が分かりにくくなる

### children を受け取るコンポーネントの場合

- `children` プロパティが必要な場合は、明示的に型定義に含める
- `ReactNode` 型を使用して定義する

## 型定義の一般的なルール

### 型推論の活用
- TypeScriptの型推論が効く場合は、冗長な型注釈を避ける
- ただし、関数の引数や戻り値の型は明示的に定義する

### any型の使用制限
- `any` 型の使用は原則として禁止
- どうしても必要な場合は、理由をコメントで記述する
- 代わりに `unknown` 型の使用を検討する

### オブジェクト型の定義
- インターフェース（`interface`）よりも型エイリアス（`type`）を優先して使用する
- 理由：
  - 型エイリアスの方が制約が強く、予期しない拡張を防げる
  - Union型やIntersection型との親和性が高い

### イベントハンドラの型定義
- イベントハンドラには適切なイベント型を指定する
- 例：`onChange: (e: ChangeEvent<HTMLInputElement>) => void`

### Nullableな値の扱い
- `null`や`undefined`を許容する場合は、必ず型定義に明示する
- オプショナルチェイニング（`?.`）やNull合体演算子（`??`）を活用する