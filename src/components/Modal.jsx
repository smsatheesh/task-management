import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

export default function Modal({ children, buttonText, ref }) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialogRef}
      className="rounded-md p-8 shadow-md backdrop:bg-stone-800/90"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button buttonLabel={buttonText} />
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}
