import React from "react";

const DynamicTextHighlighter = ({ text }: { text: string }) => {
  // Define a regular expression to match the `smth` pattern.
  const pattern = /`(.*?)`/g;

  // Split the text into an array of text and `smth` matches.
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          // If the part matches the pattern `text` , wrap it in a highlight span.
          return (
            <span key={index} className="highlight">
              {part.replace(/`|`/g, "")}
            </span>
          );
        } else {
          // Otherwise, render the text as is.
          return <span key={index}>{part} </span>;
        }
      })}
    </>
  );
};

export default DynamicTextHighlighter;
