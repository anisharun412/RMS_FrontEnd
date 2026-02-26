import StatusBadge from "../badges/StatusBadge";

function RoomCard({ room }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">
          Room {room.id}
        </h3>
        <StatusBadge status={room.status} />
      </div>

      <p className="text-sm text-gray-500 mb-4">
        Type: {room.type}
      </p>

      <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2 rounded-lg hover:scale-105 transition">
        Update Status
      </button>
    </div>
  );
}

export default RoomCard;