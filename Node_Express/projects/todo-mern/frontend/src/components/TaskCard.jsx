import { Link } from "react-router-dom";

function TaskCard({ task, onToggleComplete, onDelete }) {
  const priorityColors = {
    low: "#4caf50",
    medium: "#ff9800",
    high: "#f44336",
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "10px",
        opacity: task.status === "completed" ? 0.6 : 1,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ margin: 0, textDecoration: task.status === "completed" ? "line-through" : "none" }}>
          {task.title}
        </h3>
        <span style={{ color: priorityColors[task.priority], fontWeight: "bold" }}>
          {task.priority.toUpperCase()}
        </span>
      </div>

      {task.description && <p>{task.description}</p>}

      {task.dueDate && (
        <p style={{ fontSize: "0.85em", color: "#666" }}>
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
      )}

      <p style={{ fontSize: "0.85em" }}>
        Status: <strong>{task.status}</strong>
      </p>

      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={() => onToggleComplete(task._id)}>
          {task.status === "completed" ? "Mark Pending" : "Mark Completed"}
        </button>
        <Link to={`/tasks/edit/${task._id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={() => onDelete(task._id)} style={{ color: "red" }}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;