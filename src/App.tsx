import Card from "./components/Card"
import ShowTasks from "./components/ShowTasks"
import { useState } from "react";
import { Task } from "./interfaces/taskInterface";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <div>
      <Card setTasks={setTasks} tasks={tasks} />
      <ShowTasks tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App