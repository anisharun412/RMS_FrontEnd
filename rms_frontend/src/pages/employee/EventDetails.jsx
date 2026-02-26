import EmployeeLayout from "../../layouts/EmployeeLayout";

function EventDetails() {
  return (
    <EmployeeLayout>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Event Details
      </h2>

      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h3 className="text-lg font-semibold mb-2">
          Wedding Ceremony
        </h3>

        <p className="text-gray-500 mb-1">📍 Grand Hall</p>
        <p className="text-gray-500 mb-1">📅 March 10, 2026</p>
        <p className="text-gray-500 mb-4">🎯 Role: Decoration Team</p>

        <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-600">
          Upcoming
        </span>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h4 className="font-semibold mb-4">Checklist</h4>

        <ChecklistItem text="Stage Setup Completed" />
        <ChecklistItem text="Lighting Checked" />
        <ChecklistItem text="Seating Arrangement Ready" />
        <ChecklistItem text="Catering Confirmed" />

        <button className="mt-6 w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2 rounded-lg hover:scale-105 transition">
          Mark Event Completed
        </button>
      </div>
    </EmployeeLayout>
  );
}

function ChecklistItem({ text }) {
  return (
    <div className="flex items-center mb-3">
      <input type="checkbox" className="mr-3" />
      <span className="text-gray-600">{text}</span>
    </div>
  );
}

export default EventDetails;