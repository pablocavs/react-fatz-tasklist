import { useContext } from "react";
import { TaskCard } from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

export function TaskList() {
  const { tasks } = useContext(TaskContext);
  return (
    <>
      <h1 className="text-center text-3xl mb-3 text-white">
        {tasks.length !== 0 ? "Lista de tareas" : "No hay tareas"}
      </h1>
      <div className="grid grid-cols-4 gap-2">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </>
  );
}
