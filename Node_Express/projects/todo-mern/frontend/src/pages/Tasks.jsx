import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTasks, deleteTask, toggleTaskComplete } from "../services/taskService";
import TaskList from "../components/TaskList";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError("Failed to load tasks.");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleComplete = async (id) => {
    try {
      const updatedTask = await toggleTaskComplete(id);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === id ? updatedTask : task))
      );
    } catch (err) {
      setError("Failed to update task status.");
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (!confirmed) return;

    try {
      await deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (err) {
      setError("Failed to delete task.");
    }
  };

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>My Tasks</h1>
        <Link to="/tasks/create">
          <button>+ Create New Task</button>
        </Link>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />
    </div>
  );
}

export default Tasks;