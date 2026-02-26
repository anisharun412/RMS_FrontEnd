import StatusBadge from "../badges/StatusBadge";

function EventCard({ event }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">

      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-700">
          {event.name}
        </h3>
        <StatusBadge status={event.status} />
      </div>

      <p className="text-sm text-gray-500 mb-1">📍 {event.location}</p>
      <p className="text-sm text-gray-500 mb-1">📅 {event.date}</p>
      <p className="text-sm text-gray-500 mb-4">🎯 Role: {event.role}</p>

      <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2 rounded-lg hover:scale-105 transition">
        View Details
      </button>
    </div>
  );
}

export default EventCard;