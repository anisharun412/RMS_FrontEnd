function PriorityBadge({ priority }) {
  const colors = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-600",
    Low: "bg-green-100 text-green-600",
  };

  return (
    <span className={`px-3 py-1 text-xs rounded-full ${colors[priority]}`}>
      {priority}
    </span>
  );
}

export default PriorityBadge;