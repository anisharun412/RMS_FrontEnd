import EmployeeLayout from "../../../layouts/EmployeeLayout";

function DailyReport() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Daily Report
      </h2>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <ReportCard title="Tasks Completed" value="18" />
        <ReportCard title="Rooms Cleaned" value="7" />
        <ReportCard title="Events Managed" value="2" />
        <ReportCard title="Tickets Resolved" value="5" />
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-4">Report Date</h3>

        <input
          type="date"
          className="border p-2 rounded-lg w-60"
        />

        <button className="ml-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition">
          Download Report
        </button>
      </div>
    </div>
  );
}

function ReportCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-3xl font-bold text-teal-600 mt-2">{value}</p>
    </div>
  );
}

export default DailyReport;