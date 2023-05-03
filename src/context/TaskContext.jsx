import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([
    { title: "hola", id: "asdasd", description: "descriot" },
    { title: "hola2", id: "asdasd2", description: "descriot2" },
    { title: "hola3", id: "asdasd3", description: "descriot3" },
  ]);

  const deleteTask = (taskId) => {
    console.log("borrando taskId: ", taskId);
    console.log(tasks);
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: task.title + task.description,
        description: task.description,
      },
    ]);
  };

  useEffect(() => {
    //console.log(tasks)
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
