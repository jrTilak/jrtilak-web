export const extractHeadings = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const headings = Array.from(
    doc.querySelectorAll("h1, h2, h3, h4, h5, h6")
  ).map((heading) => ({
    depth: parseInt(heading.tagName[1]),
    id: heading.id,
    value: heading.textContent,
  }));

  return headings;
};

export interface extractedHeadingType {
  depth: number;
  id: string;
  value: string | null;
}