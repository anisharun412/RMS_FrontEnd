
// import StatsCard from "../../components/employee/cards/StatsCard";

// function EmployeeDashboard() {
//   const stats = [
//     { title: "Pending Tasks", value: 8 },
//     { title: "Rooms Cleaning", value: 5 },
//     { title: "Open Tickets", value: 3 },
//     { title: "Upcoming Events", value: 2 },
//   ];

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Employee Dashboard</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, index) => (
//           <StatsCard
//             key={index}
//             title={stat.title}
//             value={stat.value}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default EmployeeDashboard;

import StatsCard from "../../components/employee/cards/StatsCard";

function EmployeeDashboard() {
  return (
    <div className="space-y-8">

      {/* 🔢 Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Rooms"
          value="120"
          trend="up"
          percent={75}
          color="bg-teal-500"
        />

        <StatsCard
          title="Pending Tasks"
          value="18"
          trend="down"
          percent={40}
          color="bg-red-500"
        />

        <StatsCard
          title="Events Today"
          value="5"
          trend="up"
          percent={60}
          color="bg-blue-500"
        />

        <StatsCard
          title="Inventory Alerts"
          value="7"
          trend="down"
          percent={30}
          color="bg-yellow-500"
        />
      </div>

      {/* 📋 Today Overview */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Today Overview
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>• 12 rooms need cleaning</li>
          <li>• 3 maintenance requests pending</li>
          <li>• Wedding event at 6:00 PM</li>
          <li>• Low stock: Towels & Cleaning Supplies</li>
        </ul>
      </div>

      {/* 🕒 Recent Activity + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Activity
          </h3>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li>✔ Room 203 cleaned</li>
            <li>✔ AC repaired in Room 105</li>
            <li>✔ Inventory updated for kitchen</li>
            <li>✔ Support ticket #234 resolved</li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Quick Actions
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <button className="bg-teal-600 text-white py-2 rounded-lg hover:scale-105 transition">
              Create Task
            </button>

            <button className="bg-blue-600 text-white py-2 rounded-lg hover:scale-105 transition">
              Update Room
            </button>

            <button className="bg-yellow-500 text-white py-2 rounded-lg hover:scale-105 transition">
              Add Inventory
            </button>

            <button className="bg-purple-600 text-white py-2 rounded-lg hover:scale-105 transition">
              Raise Ticket
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default EmployeeDashboard;