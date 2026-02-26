
// import {
//   LayoutDashboard,
//   ClipboardList,
//   BedDouble,
//   CalendarDays,
//   Boxes,
//   Utensils,
//   LifeBuoy,
//   BarChart3,
//   Settings
// } from "lucide-react";

// const menuItems = [
//   { name: "Dashboard", icon: LayoutDashboard },
//   { name: "Assigned Tasks", icon: ClipboardList },
//   { name: "Room Status", icon: BedDouble },
//   { name: "Events", icon: CalendarDays },
//   { name: "Inventory", icon: Boxes },
//   { name: "F&B Tasks", icon: Utensils },
//   { name: "Support Tickets", icon: LifeBuoy },
//   { name: "Reports", icon: BarChart3 },
//   { name: "Misc", icon: Settings },
// ];

// function Sidebar({ activePage, setActivePage, collapsed }) {
//   return (
//     <div
//       className={`h-screen bg-gradient-to-b from-teal-700 to-blue-700 text-white p-4 transition-all duration-300
//         ${collapsed ? "w-20" : "w-64"}`}
//     >
//       <h1 className={`text-xl font-bold mb-8 transition-all duration-300 ${collapsed && "hidden"}`}>
//         RMS
//       </h1>

//       <ul className="space-y-2">
//         {menuItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = activePage === item.name;

//           return (
//             <li
//               key={item.name}
//               onClick={() => setActivePage(item.name)}
//               className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300
//                 ${isActive ? "bg-white text-teal-700 shadow-md" : "hover:bg-white/20"}`}
//             >
//               <Icon size={18} />
//               {!collapsed && (
//                 <span className="text-sm font-medium">
//                   {item.name}
//                 </span>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;

import {
  LayoutDashboard,
  ClipboardList,
  BedDouble,
  CalendarDays,
  Boxes,
  Utensils,
  LifeBuoy,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

function Sidebar({ activePage, setActivePage, collapsed }) {
  const [openReports, setOpenReports] = useState(false);
  const [openMisc, setOpenMisc] = useState(false);

  const mainItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Assigned Tasks", icon: ClipboardList },
    { name: "Room Status", icon: BedDouble },
    { name: "Events", icon: CalendarDays },
    { name: "Inventory", icon: Boxes },
    { name: "F&B Tasks", icon: Utensils },
    { name: "Support Tickets", icon: LifeBuoy },
  ];

  const reportItems = [
    "Daily Report",
    "Task Report",
    "Inventory Report",
  ];

  const miscItems = [
    "Announcements",
    "Profile",
    "Leave Request",
    "Calendar",
  ];

  return (
    <div
      className={`h-screen bg-gradient-to-b from-teal-700 to-blue-700 text-white p-4 transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}`}
    >
      {!collapsed && (
        <h1 className="text-xl font-bold mb-6">RMS</h1>
      )}

      <ul className="space-y-2">

        {/* Main Items */}
        {mainItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.name;

          return (
            <li
              key={item.name}
              onClick={() => setActivePage(item.name)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition
                ${isActive ? "bg-white text-teal-700" : "hover:bg-white/20"}`}
            >
              <Icon size={18} />
              {!collapsed && <span>{item.name}</span>}
            </li>
          );
        })}

        {/* Reports Dropdown */}
        <li>
          <div
            onClick={() => setOpenReports(!openReports)}
            className="flex items-center justify-between p-3 cursor-pointer hover:bg-white/20 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <BarChart3 size={18} />
              {!collapsed && <span>Reports</span>}
            </div>
            {!collapsed &&
              (openReports ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
          </div>

          {!collapsed && openReports && (
            <ul className="ml-8 mt-1 space-y-1">
              {reportItems.map((item) => (
                <li
                  key={item}
                  onClick={() => setActivePage(item)}
                  className={`p-2 rounded cursor-pointer text-sm
                    ${activePage === item ? "bg-white text-teal-700" : "hover:bg-white/20"}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Misc Dropdown */}
        <li>
          <div
            onClick={() => setOpenMisc(!openMisc)}
            className="flex items-center justify-between p-3 cursor-pointer hover:bg-white/20 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <Settings size={18} />
              {!collapsed && <span>Misc</span>}
            </div>
            {!collapsed &&
              (openMisc ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
          </div>

          {!collapsed && openMisc && (
            <ul className="ml-8 mt-1 space-y-1">
              {miscItems.map((item) => (
                <li
                  key={item}
                  onClick={() => setActivePage(item)}
                  className={`p-2 rounded cursor-pointer text-sm
                    ${activePage === item ? "bg-white text-teal-700" : "hover:bg-white/20"}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;