function StatCard({ label, value, color }) {
  return (
    <div
      style={{
        border: `1px solid ${color}`,
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        minWidth: "150px",
      }}
    >
      <h2 style={{ margin: 0, color }}>{value}</h2>
      <p style={{ margin: 0 }}>{label}</p>
    </div>
  );
}

export default StatCard;