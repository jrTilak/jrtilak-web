import Markdown from "react-markdown";
const RenderHtml = ({ html }: { html: any }) => {
  return <Markdown className="prose w-full max-w-[850px]">{html}</Markdown>;
};
export default RenderHtml;
