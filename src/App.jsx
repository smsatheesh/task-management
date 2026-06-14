import { useState } from "react";
import { v4 as uuid_v4 } from "uuid";

import SideBar from "./components/layout/SideBar";
import Project from "./components/features/project/Project";
import FallBackProject from "./components/features/project/FallBackProject";
import SelectedProject from "./components/features/project/SelectedProject";

function App() {
  const [projectStates, setProjectStates] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(task) {
    setProjectStates((prevState) => {
      const taskId = uuid_v4();
      const newTask = {
        id: taskId,
        projectId: prevState.selectedProjectId,
        text: task,
      };

      return {
        ...prevState,
        selectedProjectId: prevState.selectedProjectId,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectStates((prevState) => {
      return {
        ...prevState,
        selectedProjectId: prevState.selectedProjectId,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectStates((prevState) => {
      return { ...prevState, selectedProjectId: id };
    });
  }

  function handleDeleteProject() {
    setProjectStates((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
        ),
      };
    });
  }

  function handlerCancelAddProject() {
    setProjectStates((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  function handleStartAddProject() {
    setProjectStates((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  function handleAddProject(projectData) {
    setProjectStates((prevState) => {
      const projectId = uuid_v4();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let componentToRender;

  if (projectStates.selectedProjectId) {
    const selectedProject = projectStates.projects.find(
      (project) => project.id === projectStates.selectedProjectId,
    );

    componentToRender = (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectStates.tasks}
      />
    );
  } else if (projectStates.selectedProjectId === null) {
    componentToRender = (
      <Project onAdd={handleAddProject} onCancel={handlerCancelAddProject} />
    );
  } else {
    componentToRender = (
      <FallBackProject onStartAddProject={handleStartAddProject} />
    );
  }

  return (
    <main className="my-8 flex h-screen gap-8">
      <SideBar
        onStartAddProject={handleStartAddProject}
        projects={projectStates.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectStates.selectedProjectId}
      />
      {componentToRender}
    </main>
  );
}

export default App;
