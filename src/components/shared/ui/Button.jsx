export default function Button({ buttonLabel, ...props }) {
  return (
    <button
      className="text-sx rounded-md bg-stone-700 px-4 py-2 text-stone-400 hover:bg-stone-600 hover:text-stone-100 md:text-base"
      {...props}
    >
      {buttonLabel}
    </button>
  );
}
