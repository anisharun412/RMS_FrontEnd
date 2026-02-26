import StatusBadge from "../badges/StatusBadge";

function InventoryCard({ item }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-700">
          {item.item}
        </h3>
        <StatusBadge status={item.status} />
      </div>

      <p className="text-gray-500 mb-4">
        Quantity: {item.quantity}
      </p>

      <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2 rounded-lg hover:scale-105 transition">
        Request Restock
      </button>
    </div>
  );
}

export default InventoryCard;