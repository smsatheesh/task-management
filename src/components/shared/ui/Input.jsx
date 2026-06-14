import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { taskLabel, isTextArea = false, ...props },
  ref,
) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <div className="my-4 flex flex-col gap-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {taskLabel}
      </label>
      {isTextArea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </div>
  );
});

export default Input;
