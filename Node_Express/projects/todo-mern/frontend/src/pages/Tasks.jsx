import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTasks, deleteTask, toggleTaskComplete } from "../services/taskService";
import TaskList from "../components/TaskList";
import useDebounce from "../hooks/useDebounce";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [order, setOrder] = useState("desc");

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    fetchTasks();
  }, [debouncedSearch, status, priority, sortBy, order]);

  const fetchTasks = async () => {
    setLoading(true);
    setError("");
    try {
      const params = {};
      if (debouncedSearch) params.search = debouncedSearch;
      if (status) params.status = status;
      if (priority) params.priority = priority;
      params.sortBy = sortBy;
      params.order = order;

      const data = await getTasks(params);
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

  return (
    <div className="container">
      <div className="page-header">
        <div>
          <h1 className="page-title">My Tasks</h1>
          <p className="page-subtitle">Search, filter, sort and manage your list.</p>
        </div>
        <Link to="/tasks/create" className="btn">
          + Create New Task
        </Link>
      </div>

      <div className="filters-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="createdAt">Date Created</option>
          <option value="dueDate">Due Date</option>
          <option value="title">Title</option>
          <option value="priority">Priority</option>
        </select>

        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>

      {error && <p className="error-text">{error}</p>}

      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />
      )}
    </div>
  );
}

export default Tasks;
