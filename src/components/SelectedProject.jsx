import Paragraph from "./Paragraph";
import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="mt-16 w-[35rem]">
      <header className="border-b-2 border-stone-300 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 text-3xl font-bold text-stone-600">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <Paragraph>{formattedDate}</Paragraph>
        <Paragraph className="whitespace-pre-wrap text-stone-600">
          {project.description}
        </Paragraph>
      </header>
      <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  );
}
