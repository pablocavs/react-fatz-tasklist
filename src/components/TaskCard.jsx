import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskCard({task}) {
  const { deleteTask } = useContext(TaskContext);
  console.log("taskId en taskcard: ", task.id);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl  font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500">{task.description}</p>
      <button className="text-white bg-red-600 hover:bg-red-500 px-2 py-1 rounded-md mt-4" onClick={() => deleteTask(task.id)}>Delete Task</button>
    </div>
  );
}
