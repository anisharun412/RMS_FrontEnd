import PriorityBadge from "../badges/PriorityBadge";
import StatusBadge from "../badges/StatusBadge";

function TicketCard({ ticket }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">

      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-700">
          {ticket.issue}
        </h3>
        <PriorityBadge priority={ticket.priority} />
      </div>

      <p className="text-sm text-gray-500 mb-2">
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

export default TicketCard;