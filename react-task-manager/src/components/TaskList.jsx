import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList({ filter }) {
  const tasks = useSelector(state => state.tasks.tasks);

  const filteredTasks = tasks.filter(task => {
    if (filter === "ALL") return true;
    return task.priority === filter;
  });

  return (
    <div className="mt-6 space-y-3">
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;