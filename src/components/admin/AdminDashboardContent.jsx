// // src/components/AdminDashboardContent.jsx
// import React from "react";

// export default function AdminDashboardContent() {
//   return (
//     <section
//       className="
//         bg-white
//         rounded-2xl
//         shadow-[var(--rms-soft-shadow)]
//         p-6
//         h-full
//       "
//     >
//       <h2 className="text-2xl font-semibold text-[var(--rms-neutral-800)]">
//         Dashboard Content
//       </h2>

//       {/* Example inner cards */}
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="rounded-xl bg-[var(--rms-neutral-50)] p-4">
//           Occupancy
//         </div>
//         <div className="rounded-xl bg-[var(--rms-neutral-50)] p-4">
//           Revenue
//         </div>
//         <div className="rounded-xl bg-[var(--rms-neutral-50)] p-4">
//           Alerts
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

const StatCard = ({ title, value, sub, highlight }) => {
  return (
    <div
      className={`
        relative rounded-2xl p-5 overflow-hidden
        ${highlight
          ? `
            text-white
            bg-gradient-to-br
            from-[var(--rms-primary-500)]
            to-[var(--rms-primary-700)]
          `
          : `
            bg-white/80 backdrop-blur-md
            border border-[var(--rms-neutral-200)]
          `}
      `}
    >
      {/* Soft radial glow */}
      {highlight && (
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      )}

      <div className="relative z-10">
        <div className="text-sm opacity-80">{title}</div>
        <div className="mt-2 text-3xl font-semibold">{value}</div>
        {sub && <div className="mt-2 text-xs opacity-70">{sub}</div>}
      </div>
    </div>
  );
};

export default function AdminDashboardContent() {
  return (
    <section
      className="
        relative
        rounded-3xl
        p-6 h-full overflow-auto
        from-[var(--rms-neutral-50)]
        via-white
        to-[var(--rms-primary-50)]
        shadow-[var(--rms-soft-shadow)]
      "
    >
      {/* Top subtle overlay glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/60 to-transparent pointer-events-none rounded-3xl" />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--rms-neutral-900)]">
            Dashboard Overview
          </h2>
          <p className="text-sm text-[var(--rms-neutral-500)]">
            Real-time resort performance
          </p>
        </div>

        {/* KPI GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard title="Page Views" value="12,430" sub="+8% today" />
          <StatCard title="Revenue Today" value="₹1,24,500" sub="Live earnings" highlight />
          <StatCard title="Active Reservations" value="86" sub="Currently active" />
          <StatCard title="Occupancy" value="78%" sub="Rooms filled" />
          <StatCard title="Pending Invoices" value="14" sub="Requires action" />
          <StatCard title="Total Customers Signed In" value="1,284" sub="All-time" />
          <StatCard title="Monthly Sales" value="₹28.4L" sub="This month" />
          <StatCard title="Alerts" value="3" sub="Needs attention" />
        </div>

        {/* LOWER GRID */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Monthly Sales Overview */}
          <div
            className="
              col-span-2
              rounded-3xl
              p-6
              bg-white/80 backdrop-blur-md
              border border-[var(--rms-neutral-200)]
              relative overflow-hidden
            "
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--rms-primary-100)] rounded-full blur-3xl opacity-40" />

            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-[var(--rms-neutral-800)] mb-4">
                Monthly Sales Overview
              </h3>

              <div className="h-48 rounded-2xl bg-gradient-to-r from-[var(--rms-primary-100)] to-[var(--rms-primary-50)] flex items-center justify-center text-sm text-[var(--rms-neutral-500)]">
                📊 Sales Graph Area
              </div>
            </div>
          </div>

          {/* Alerts & Quick Actions */}
          <div className="flex flex-col gap-6">

            {/* Alerts */}
            <div className="
              rounded-3xl p-6
              bg-gradient-to-br
              from-white
              to-[var(--rms-neutral-50)]
              border border-[var(--rms-neutral-200)]
            ">
              <h3 className="text-lg font-semibold text-[var(--rms-neutral-800)] mb-4">
                Alerts
              </h3>
              <ul className="space-y-3 text-sm text-[var(--rms-neutral-600)]">
                <li>⚠️ 2 rooms need maintenance</li>
                <li>💳 Failed payment (Invoice #1024)</li>
                <li>📦 Low stock in inventory</li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="
              rounded-3xl p-6
              bg-gradient-to-br
              from-[var(--rms-primary-50)]
              to-white
              border border-[var(--rms-neutral-200)]
            ">
              <h3 className="text-lg font-semibold text-[var(--rms-neutral-800)] mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <button className="rounded-xl bg-white shadow hover:shadow-md transition py-2">
                  ➕ Reservation
                </button>
                <button className="rounded-xl bg-white shadow hover:shadow-md transition py-2">
                  🧾 Invoice
                </button>
                <button className="rounded-xl bg-white shadow hover:shadow-md transition py-2">
                  🏨 Add Room
                </button>
                <button className="rounded-xl bg-white shadow hover:shadow-md transition py-2">
                  👤 Add Guest
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}