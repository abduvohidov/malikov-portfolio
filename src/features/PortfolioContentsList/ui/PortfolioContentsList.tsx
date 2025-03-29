import React from "react";

interface PortfolioContentsListProps {
  className?: string;
  CONTENT_LIST?: ContentListType[];
}

type ContentListType = {
  title?: string;
  src?: string;
};

export const PortfolioContentsList: React.FC<PortfolioContentsListProps> = (
  props
) => {
  const { className, CONTENT_LIST } = props;
  return CONTENT_LIST
    ? CONTENT_LIST.map((item, index: number) => (
        <iframe
          key={index}
          src={item.src}
          title={item.title || "title"}
          className={className}
        />
      ))
    : "no content";
};
