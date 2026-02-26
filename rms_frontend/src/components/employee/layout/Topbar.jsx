
import { Menu } from "lucide-react";

function Topbar({ setCollapsed, collapsed }) {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="p-2 rounded-lg hover:bg-gray-100 transition"
      >
        <Menu size={20} />
      </button>

      <h2 className="text-lg font-semibold text-gray-700">
        Employee Panel
      </h2>

      <div className="text-sm text-gray-500">
        Welcome, Employee
      </div>
    </div>
  );
}

export default Topbar;
