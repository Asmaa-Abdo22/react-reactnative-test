import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/slices/tasksSlice";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <div
      className={` border rounded-lg flex items-center justify-between l p-4 shadow-lg hover:shadow-md transition  ${task.priority === "Low" ? "low-priority" : task.priority === "Medium" ? "medium-priority" : "high-priority"}`}
    >
      <div>
        <h3
          className={`text-lg font-semibold text-blue-800 ${task.completed ? "line-through opacity-60" : ""} `}
        >
          {task.title}
        </h3>

        <p className="text-sm text-blue-500 mt-4">{task.priority}</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => dispatch(toggleTask(task.id))}
          className="btn  bg-orange-500 hover:bg-orange-600 "
        >
          Toggle
        </button>

        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="btn bg-red-500 hover:bg-red-600 "
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
