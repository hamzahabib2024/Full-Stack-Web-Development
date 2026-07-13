import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTaskStats } from "../services/taskService";
import StatCard from "../components/StatCard";

function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    highPriority: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getTaskStats();
        setStats(data);
      } catch (err) {
        setError("Failed to load dashboard stats.");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Your task summary and progress.</p>
        </div>
        <div className="page-actions">
          <Link to="/tasks/create" className="btn">
            + Create New Task
          </Link>
          <Link to="/tasks" className="button-link">
            View All Tasks ?
          </Link>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard label="Total Tasks" value={stats.total} />
        <StatCard label="Completed" value={stats.completed} />
        <StatCard label="Pending" value={stats.pending} />
        <StatCard label="High Priority" value={stats.highPriority} />
      </div>
    </div>
  );
}

export default Dashboard;
