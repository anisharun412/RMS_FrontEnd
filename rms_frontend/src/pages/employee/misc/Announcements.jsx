import EmployeeLayout from "../../../layouts/EmployeeLayout";

const announcements = [
  {
    id: 1,
    title: "Staff Meeting",
    message: "All employees must attend the meeting at 5 PM in Conference Hall A.",
    date: "26 Feb 2026",
  },
  {
    id: 2,
    title: "New Safety Guidelines",
    message: "Please review the updated safety procedures shared via email.",
    date: "24 Feb 2026",
  },
  {
    id: 3,
    title: "Annual Function",
    message: "Annual celebration event scheduled next month. Details coming soon!",
    date: "20 Feb 2026",
  },
];

function Announcements() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Announcements
      </h2>

      <div className="space-y-4">
        {announcements.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <span className="text-sm text-gray-400">
                {item.date}
              </span>
            </div>

            <p className="text-gray-600 text-sm">
              {item.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Announcements;