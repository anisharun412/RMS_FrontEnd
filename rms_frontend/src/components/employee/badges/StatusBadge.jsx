function StatusBadge({ status }) {
  const colors = {
    Vacant: "bg-green-100 text-green-600",
    Occupied: "bg-blue-100 text-blue-600",
    Cleaning: "bg-yellow-100 text-yellow-600",
    Maintenance: "bg-red-100 text-red-600",
    Open: "bg-red-100 text-red-600",
    "In Progress": "bg-blue-100 text-blue-600",
    Resolved: "bg-green-100 text-green-600",
    Upcoming: "bg-yellow-100 text-yellow-600",
    Ongoing: "bg-blue-100 text-blue-600",
    Completed: "bg-green-100 text-green-600",
    OK: "bg-green-100 text-green-600",
    Low: "bg-red-100 text-red-600",
  };

  return (
    <span className={`px-3 py-1 text-xs rounded-full ${colors[status] || "bg-gray-100 text-gray-600"}`}>
      {status}
    </span>
  );
}

export default StatusBadge;