import EmployeeLayout from "../../layouts/EmployeeLayout";

const tickets = [
  {
    id: 1,
    issue: "AC Not Working",
    room: 204,
    status: "Open",
    priority: "High",
  },
  {
    id: 2,
    issue: "Water Leakage",
    room: 105,
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: 3,
    issue: "TV Remote Missing",
    room: 302,
    status: "Resolved",
    priority: "Low",
  },
];

function SupportTickets() {
  return (
    <div> 
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Support Tickets
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

function TicketCard({ ticket }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">

      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-700">
          {ticket.issue}
        </h3>
        <PriorityBadge priority={ticket.priority} />
      </div>

      <p className="text-sm text-gray-500 mb-1">
        Room: {ticket.room}
      </p>

      <StatusBadge status={ticket.status} />

        <button
  disabled={ticket.status !== "Open"}
  className={`mt-4 w-full py-2 rounded-lg transition ${
    ticket.status === "Open"
      ? "bg-gradient-to-r from-teal-600 to-blue-600 text-white hover:scale-105"
      : "bg-gray-300 text-gray-600 cursor-not-allowed"
  }`}
>
  {ticket.status === "Open"
    ? "Resolve Ticket"
    : ticket.status === "In Progress"
    ? "In Progress"
    : "Already Resolved"}
</button>
    </div>
  );
}

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

function StatusBadge({ status }) {
  const colors = {
    Open: "bg-red-100 text-red-600",
    "In Progress": "bg-blue-100 text-blue-600",
    Resolved: "bg-green-100 text-green-600",
  };

  return (
    <div className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${colors[status]}`}>
      {status}
    </div>
  );
}

export default SupportTickets;