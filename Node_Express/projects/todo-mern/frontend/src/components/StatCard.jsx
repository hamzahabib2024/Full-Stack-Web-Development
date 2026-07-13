function StatCard({ label, value }) {
  return (
    <div className="stat-card">
      <p className="stat-card-title">{label}</p>
      <h2 className="stat-card-value">{value}</h2>
    </div>
  );
}

export default StatCard;
