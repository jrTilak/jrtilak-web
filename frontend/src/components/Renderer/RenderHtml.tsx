const RenderHtml = ({ html }: { html: any }) => {
  return (
    <div
      className="prose w-full max-w-[850px]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
export default RenderHtml;
