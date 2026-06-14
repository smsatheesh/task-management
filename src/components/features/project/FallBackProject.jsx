import Header from "../../shared/ui/Header";
import Button from "../../shared/ui/Button";
import fallBackImage from "../../../assets/no-projects.png";
import Paragraph from "../../shared/ui/Paragraph";

export default function FallBackProject({ onStartAddProject }) {
  return (
    <div className="mt-24 w-2/3 text-center">
      <img
        src={fallBackImage}
        alt="An empty task list"
        className="mx-auto h-16 w-16"
      />
      <Header className="my-4 text-xl font-bold text-stone-500">
        No Project Selected
      </Header>
      <Paragraph className="mb-4 text-stone-400">
        Select a project or get started with a new one
      </Paragraph>
      <p className="mt-8">
        <Button
          buttonLabel="Create a New Project"
          onClick={onStartAddProject}
        />
      </p>
    </div>
  );
}
