import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="hero-card">
        <h1>Organize your day with TaskFlow</h1>
        <p>Create, update, and track your tasks with a beautiful productivity dashboard.</p>
        <div className="hero-actions">
          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn btn-secondary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
