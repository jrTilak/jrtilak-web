import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import { rehype } from "rehype";

export const convertMarkdownToHtml = async (
  markdown: string
): Promise<string> => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .use(rehypeDocument)
    .use(rehypeFormat)
    .process(markdown);

  const html = await rehype()
    .data("settings", { fragment: true })
    .use(rehypeSlug)
    .process(file);

  return String(html);
};
