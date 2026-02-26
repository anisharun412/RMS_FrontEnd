import EmployeeLayout from "../../../layouts/EmployeeLayout";

function LeaveRequest() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Leave Request
      </h2>

      <div className="bg-white p-6 rounded-xl shadow max-w-lg">

        <div className="space-y-4">

          <select className="w-full border p-2 rounded-lg">
            <option>Select Leave Type</option>
            <option>Casual Leave</option>
            <option>Sick Leave</option>
          </select>

          <input type="date" className="w-full border p-2 rounded-lg" />
          <input type="date" className="w-full border p-2 rounded-lg" />

          <textarea
            placeholder="Reason"
            className="w-full border p-2 rounded-lg"
          />

          <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2 rounded-lg hover:scale-105 transition">
            Submit Request
          </button>

        </div>

      </div>
    </div>
  );
}

export default LeaveRequest;