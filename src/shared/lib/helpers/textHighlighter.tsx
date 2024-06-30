export const textHighlighter = (
  text?: string,
  highlight?: string,
  className?: string
) => {
  const parts = text?.split(new RegExp(`(${highlight})`, 'gi'));
  return parts?.map((part, index) =>
    part.toLowerCase() === highlight?.toLowerCase() ? (
      <span key={index} className={className}>
        {part}
      </span>
    ) : (
      part
    )
  );
};
