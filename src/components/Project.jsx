import { useRef } from "react";

import Header from "./Header";
import Paragraph from "./Paragraph";
import Input from "./Input";
import Modal from "./Modal";

export default function Project({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleCancel() {}

  function handleSave() {
    if (
      title.current.value.trim() === "" ||
      dueDate.current.value.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonText="Okay">
        <Header>Invalid Value</Header>
        <Paragraph>Oops ... looks like you forgot to enter a value.</Paragraph>
        <Paragraph>
          Please make sure you provide a valid value for title and due date.
        </Paragraph>
      </Modal>

      <div className="mt-16 w-[35rem]">
        <menu className="my-4 flex items-center justify-end gap-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="rounded-md bg-stone-800 px-6 py-2 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input type="text" taskLabel={"Title"} ref={title} />
          <Input taskLabel={"Description"} ref={description} isTextArea />
          <Input type="date" taskLabel={"Due Date"} ref={dueDate} />
        </div>
      </div>
    </>
  );
}
