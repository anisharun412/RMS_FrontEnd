import EmployeeLayout from "../../../layouts/EmployeeLayout";

const inventoryData = [
  { item: "Bed Sheets", used: 30, remaining: 20 },
  { item: "Towels", used: 50, remaining: 5 },
  { item: "Cleaning Liquid", used: 15, remaining: 10 },
];

function InventoryReport() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Inventory Usage Report
      </h2>

      <div className="bg-white p-6 rounded-xl shadow">
        <table className="w-full text-left">

          <thead>
            <tr className="border-b">
              <th className="py-2">Item</th>
              <th className="py-2">Used</th>
              <th className="py-2">Remaining</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {inventoryData.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{item.item}</td>
                <td className="py-2">{item.used}</td>
                <td className="py-2">{item.remaining}</td>
                <td className="py-2">
                  {item.remaining < 10 ? (
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs">
                      Low
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                      OK
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default InventoryReport;