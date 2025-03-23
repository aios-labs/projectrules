---
description: "Writing great JSDoc"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "MonsterDeveloper/moysklad-ts"
__meta__tags: ["JSDoc","Documentation","TypeScript","JavaScript","Coding Standards"]
__meta__rate: 8
---
## JSDoc guide

Use single-line JSDoc for simple values and multi-line for something more complex, for instance:
```ts
/**
 * Условия бонусных баллов
 *
 * @see https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-bonusnaq-programma-bonusnye-programmy
 */
export enum WelcomeBonusMode {
  /** Приветственные баллы начисляются участиникам после регистрации в бонусной программе. */
  Registration = "REGISTRATION",

  /** Приветственные баллы начисляются участиникам бонусной программы после совершения первой покупки. */
  FirstPurchase = "FIRST_PURCHASE",
}
```

Include the `@see` tags with placeholders for links for a human coder to fill in. Don't hallucinate the links.

The first paragraph of a JSDoc comment is the most important. It is a summary of the symbol and is shown in tooltips, auto-completions in your editor, and is indexed by search. The first paragraph should be a concise description of the symbol, and should be written in a way that helps users quickly understand what this function does.

Don't include types in JSDoc, as TypeScript already handles them well.

Use tags like `@see`, `@example`, `@param`, and `@returns` where neccessary. Link the related code using the `{@linkcode SymbolName}` tag.
```ts
/**
 * Бонусные операции
 *
 * @see https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-bonusnaq-operaciq-bonusnye-operacii
 */
export interface BonusTransactionEndpoint {
  /**
   * Получить список бонусных операций.
   *
   * @param options - Опции для получения списка {@linkcode ListBonusTransactionsOptions}
   * @returns Объект с списком бонусных операций
   *
   * @see https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-bonusnaq-operaciq-poluchit-bonusnye-operacii
   *
   * @example
   * ```ts
   * const { rows } = await moysklad.bonusTransaction.list();
   * ```
   */
  list<T extends ListBonusTransactionsOptions = Record<string, unknown>>(
    options?: Subset<T, ListBonusTransactionsOptions>,
  ): Promise<
    ListResponse<
      GetFindResult<BonusTransactionModel, T["expand"]>,
      Entity.BonusTransaction
    >
  >;
}
```

Here's an example of a great JSDoc:
```ts
/**
 * Бонусная операция
 *
 * @see https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-bonusnaq-operaciq-bonusnye-operacii
 */
export interface BonusTransaction
  extends Idable,
    Meta<Entity.BonusTransaction> {
  /** ID учетной записи */
  readonly accountId: string;

  /** Метаданные Контрагента, связанного с бонусной операцией */
  agent: Meta<Entity.Counterparty>;

  /** Отметка о проведении */
  applicable: boolean;

  /** Метаданные бонусной программы */
  bonusProgram?: Meta<Entity.BonusProgram>;

  /** Количество бонусных баллов */
  bonusValue?: number;

  /**
   * Категория бонусной операции.
   *
   * {@linkcode BonusTransactionCategoryType}
   */
  readonly categoryType?: BonusTransactionCategoryType;
}
```