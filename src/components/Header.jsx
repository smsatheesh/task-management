export default function Header(props) {
  return (
    <h2 className="my-4 text-xl font-bold text-stone-700" {...props}>
      {props.children}
    </h2>
  );
}
