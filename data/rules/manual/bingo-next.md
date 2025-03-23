---
description: "applicationのルール"
globs: "**/*.{mjs,ts, tsx}"
__meta__type: "guideline"
__meta__repo: "ROhta/bingo_next"
__meta__framework: "NextJS"
__meta__tags: ["NextJS","TailwindCSS","Web Development","Frontend","CSS"]
__meta__rate: 7
---
# next.jsの運用について

- app routerを用います
- ページ全体に関係するファイルはappディレクトリに、個々の部品はcomponentsディレクトリに格納します


# tailwind.cssの運用について

- classNameの指定は、最小のオブジェクトに指定します
- 例えば、以下のようなhtmlがあり、id="child00"にもid="child01"にもclassName="font-bold"を適用したい、という場合、className="font-bold"は親要素のid="parent"ではなく、子要素のid="child00"とid="child01"それぞれに指定します

```html
<div className="flex" id="parent">
      <div className="font-bold" id="child00">00</div>
      <div className="font-bold" id="child01">01</div>
</div>
```