import EmployeeLayout from "../../layouts/EmployeeLayout";
import TaskCard from "../../components/employee/cards/TaskCard";
const tasks = [
  {
    id: 1,
    title: "Clean Room 203",
    priority: "High",
    status: "Open",
    time: "10:00 AM",
  },
  {
    id: 2,
    title: "Fix AC - Room 105",
    priority: "Medium",
    status: "In Progress",
    time: "11:30 AM",
  },
  {
    id: 3,
    title: "Prepare Hall for Wedding",
    priority: "High",
    status: "Open",
    time: "2:00 PM",
  },
];

function AssignedTasks() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Assigned Tasks
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}


export default AssignedTasks;