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
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/tasks/create">+ Create New Task</Link>

      <div style={{ display: "flex", gap: "16px", marginTop: "20px", flexWrap: "wrap" }}>
        <StatCard label="Total Tasks" value={stats.total} color="#333" />
        <StatCard label="Completed" value={stats.completed} color="green" />
        <StatCard label="Pending" value={stats.pending} color="orange" />
        <StatCard label="High Priority" value={stats.highPriority} color="red" />
        <div style={{ marginTop: "20px" }}>
          <Link to="/tasks">View All Tasks →</Link>
        </div>
      </div>
      
    </div>
  );
}

export default Dashboard;