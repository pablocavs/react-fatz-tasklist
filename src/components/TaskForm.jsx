import { TaskContext } from "../context/TaskContext";
import { useContext, useState } from "react";

export function TaskForm() {
  const { tasks, createTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title: title, description: description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
      <h1 className="text-white text-xl pb-1">Ingrese nueva tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Ingrese tarea"
        ></input>
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ingrese descripcion"
        ></textarea>
        <button className="bg-blue-700 hover:bg-blue-600 text-white px-3 py-1 rounded-md">
          Ingresar tarea
        </button>
      </form>
    </div>
  );
}
