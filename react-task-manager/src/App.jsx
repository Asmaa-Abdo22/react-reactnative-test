import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const tasks = useSelector(state => state.tasks.tasks);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50  to-blue-100 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 border border-blue-100">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Task Manager
        </h1>

        <TaskForm />

        <div className="flex justify-end mt-4 items-center gap-2">
            <p className="text-gray-500 text-sm">Filter  by Pirority</p>
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="border border-blue-200 rounded-lg px-3 py-2 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="ALL">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        {tasks.length === 0 &&
          <p className="text-center capitalize text-gray-500 mt-10">No tasks added yet.. click on add task to add some</p>
        }
        <TaskList filter={filter} />
      </div>
    </div>
  );
}

export default App;