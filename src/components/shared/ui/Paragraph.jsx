export default function Paragraph(props) {
  return (
    <p className="mb-4 text-stone-600" {...props}>
      {props.children}
    </p>
  );
}
