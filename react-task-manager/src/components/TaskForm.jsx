import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/tasksSlice";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    dispatch(addTask({
      id: Date.now(),
      title,
      priority,
      completed: false,
    }));

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        className="flex-1 border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <select
        onChange={(e) => setPriority(e.target.value)}
        className="border border-blue-200 rounded-lg px-3 py-2 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button className="  bg-blue-900 hover:bg-blue-800 text-white btn  ">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;