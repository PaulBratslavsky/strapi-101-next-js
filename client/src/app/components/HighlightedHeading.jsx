export default function HighlightedHeading({
  heading,
  tag = "h1",
  className,
  color,
}) {
  const text = heading.split(" ");
  let result = [];

  result.push(`<${tag} class="${className ? className : ""}">`);

  text.forEach((word, index) => {
    if (word.includes("[")) {
      const highlight = word.replace("[", "").replace("]", "");
      result.push(
        `<span key=${index} class="${color ? color : ""}">${highlight}</span> `
      );
    } else result.push(word + " ");
  });

  result.push(`</${tag}>`);

  return <div dangerouslySetInnerHTML={{ __html: result.join("") }} />;
}
