import { Link } from "react-router-dom";

function TaskCard({ task, onToggleComplete, onDelete }) {
  const priorityClass = {
    low: "badge-low",
    medium: "badge-medium",
    high: "badge-high",
  };

  return (
    <div className={`task-card ${task.status === "completed" ? "completed" : ""}`}>
      <div className="task-card-header">
        <div>
          <h3 className={`task-card-title ${task.status === "completed" ? "completed" : ""}`}>
            {task.title}
          </h3>
          {task.description && <p className="card-text">{task.description}</p>}
          {task.dueDate && (
            <p className="task-card-meta">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
          )}
          <p className="task-card-meta">
            Status: <strong>{task.status}</strong>
          </p>
        </div>
        <span className={`priority-badge ${priorityClass[task.priority]}`}>
          {task.priority.toUpperCase()}
        </span>
      </div>
      <div className="task-actions">
        <button
          className={`btn ${task.status === "completed" ? "btn-secondary" : ""}`.trim()}
          onClick={() => onToggleComplete(task._id)}
        >
          {task.status === "completed" ? "Mark Pending" : "Mark Completed"}
        </button>
        <Link to={`/tasks/edit/${task._id}`} className="btn btn-secondary">
          Edit
        </Link>
        <button className="btn btn-danger" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
