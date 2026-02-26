import PriorityBadge from "../badges/PriorityBadge";
import StatusBadge from "../badges/StatusBadge";

function TaskCard({ task }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">

      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-700">
          {task.title}
        </h3>
        <PriorityBadge priority={task.priority} />
      </div>

      <p className="text-sm text-gray-500 mb-2">
        Due: {task.time}
      </p>

      <StatusBadge status={task.status} />

      <button className="mt-4 w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2 rounded-lg hover:scale-105 transition">
        Mark Complete
      </button>
    </div>
  );
}

export default TaskCard;