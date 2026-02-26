import EmployeeLayout from "../../../layouts/EmployeeLayout";

function TaskReport() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Task Performance Report
      </h2>

      <div className="bg-white p-6 rounded-xl shadow">

        <ReportRow name="John" completed={20} pending={3} />
        <ReportRow name="Sarah" completed={15} pending={5} />
        <ReportRow name="David" completed={22} pending={1} />

      </div>
    </div>
  );
}

function ReportRow({ name, completed, pending }) {
  const total = completed + pending;
  const percent = Math.round((completed / total) * 100);

  return (
    <div className="border-b py-4">

      <div className="flex justify-between mb-2">
        <span className="font-semibold">{name}</span>
        <span>{percent}% Efficiency</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-teal-600 to-blue-600 h-3 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="text-sm text-gray-500 mt-2">
        Completed: {completed} | Pending: {pending}
      </p>
    </div>
  );
}

export default TaskReport;