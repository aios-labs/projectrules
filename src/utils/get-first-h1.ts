import { Rule } from "@/types/rule";

export const getFirstH1 = (rule: Rule) => {
  if (!rule.content) return rule.frontmatter.__meta__framework;

  // Look for the first h1 tag in the content
  const h1Match = rule.content.match(/<h1>(.*?)<\/h1>/) || rule.content.match(/# (.*?)(\n|$)/);

  if (h1Match) {
    return h1Match[1];
  }

  return undefined;
};