import TaskCard from "../../components/employee/cards/TaskCard";

function FnbTasks() {
  const fnbTasks = [
    {
      title: "Prepare Breakfast Buffet",
      priority: "High",
      status: "Open",
      time: "08:00 AM",
    },
    {
      title: "Restock Bar Supplies",
      priority: "Medium",
      status: "In Progress",
      time: "11:30 AM",
    },
    {
      title: "Clean Dining Area",
      priority: "Low",
      status: "Resolved",
      time: "02:00 PM",
    },
    {
      title: "Setup Banquet Hall Catering",
      priority: "High",
      status: "Open",
      time: "05:00 PM",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">F&B Tasks</h2>

      {fnbTasks.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow text-gray-500 text-center">
          No F&B tasks assigned.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fnbTasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FnbTasks;