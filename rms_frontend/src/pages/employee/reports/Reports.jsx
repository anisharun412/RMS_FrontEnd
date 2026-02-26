import DailyReport from "./DailyReport";
import TaskReport from "./TaskReport";
import InventoryReport from "./InventoryReport";

function Reports() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Reports
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DailyReport />
        <TaskReport />
        <InventoryReport />
      </div>
    </div>
  );
}

export default Reports;