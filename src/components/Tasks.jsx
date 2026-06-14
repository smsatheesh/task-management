import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <>
      <h2 className="my-4 text-2xl font-bold text-stone-700">Tasks</h2>
      <NewTask onAdd={onAdd} onDelete={onDelete} />
      {tasks.length === 0 && (
        <p className="my-4 text-stone-800">
          This project does not have not have any tasks yet.
        </p>
      )}
      {tasks && tasks.length > 0 && (
        <ul className="mt-8 rounded-md bg-stone-100 p-4">
          {tasks.map((task) => (
            <li key={task.id} className="my-4 flex justify-between">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
