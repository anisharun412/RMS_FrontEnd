// function StatsCard({ title, value }) {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//       <h3 className="text-gray-500 text-sm">{title}</h3>
//       <p className="text-3xl font-bold text-teal-600 mt-2">{value}</p>
//     </div>
//   );
// }

// export default StatsCard;
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

function StatCard({ title, value, trend, percent, color }) {
  const isPositive = trend === "up";

  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300">
      
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm text-gray-500">{title}</h4>

        <div
          className={`flex items-center gap-1 text-sm font-semibold
            ${isPositive ? "text-green-600" : "text-red-600"}`}
        >
          {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {percent}%
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-3">{value}</h2>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>

    </div>
  );
}

export default StatCard;