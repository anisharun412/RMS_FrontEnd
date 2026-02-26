import EmployeeLayout from "../../layouts/EmployeeLayout";
const events = [
  {
    id: 1,
    name: "Wedding Ceremony",
    location: "Grand Hall",
    date: "March 10, 2026",
    role: "Decoration Team",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "Corporate Meeting",
    location: "Conference Room A",
    date: "March 12, 2026",
    role: "Technical Support",
    status: "Ongoing",
  },
  {
    id: 3,
    name: "Birthday Party",
    location: "Poolside",
    date: "March 15, 2026",
    role: "Catering",
    status: "Completed",
  },
];

function EventsList() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Assigned Events
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

function EventCard({ event }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">

      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-700">
          {event.name}
        </h3>
        <StatusBadge status={event.status} />
      </div>

      <p className="text-sm text-gray-500 mb-1">
        📍 {event.location}
      </p>

      <p className="text-sm text-gray-500 mb-1">
        📅 {event.date}
      </p>

      <p className="text-sm text-gray-500 mb-4">
        🎯 Role: {event.role}
      </p>

      <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2 rounded-lg hover:scale-105 transition">
        View Details
      </button>
    </div>
  );
}

function StatusBadge({ status }) {
  const colors = {
    Upcoming: "bg-yellow-100 text-yellow-600",
    Ongoing: "bg-blue-100 text-blue-600",
    Completed: "bg-green-100 text-green-600",
  };

  return (
    <span className={`px-3 py-1 text-xs rounded-full ${colors[status]}`}>
      {status}
    </span>
  );
}

export default EventsList;