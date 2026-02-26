// import { useState } from "react";

// // Layout Components
// import Sidebar from "../components/employee/layout/Sidebar";
// import Topbar from "../components/employee/layout/Topbar";

// // Main Pages
// import EmployeeDashboard from "../pages/employee/EmployeeDashboard";
// import AssignedTasks from "../pages/employee/AssignedTasks";
// import RoomStatus from "../pages/employee/RoomStatus";
// import EventsList from "../pages/employee/EventsList";
// import InventoryTasks from "../pages/employee/InventoryTasks";
// import FnbTasks from "../pages/employee/FnbTasks";
// import SupportTickets from "../pages/employee/SupportTickets";

// // // Reports
// import Reports from "../pages/employee/reports/Reports";

// // // Misc
// import Misc from "../pages/employee/misc/Misc";


// function EmployeeLayout() {
//   const [activePage, setActivePage] = useState("Dashboard");

//   const renderPage = () => {
//     switch (activePage) {
//       case "Dashboard":
//         return <EmployeeDashboard />;

//       case "Assigned Tasks":
//         return <AssignedTasks />;

//       case "Room Status":
//         return <RoomStatus />;

//       case "Events":
//         return <EventsList />;

//       case "Inventory":
//         return <InventoryTasks />;

//       case "F&B Tasks":
//         return <FnbTasks />;

//       case "Support Tickets":
//         return <SupportTickets />;

//       // Reports
//       case "Reports":
//         return <Reports />;

//       // Misc
//       case "Misc":
//         return <Misc />;

//       default:
//         return <EmployeeDashboard />;
//     }
//   };
// //   const renderPage = () => {
// //   return <div>Layout Safe Mode</div>;
// // };
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar activePage={activePage} setActivePage={setActivePage} />

//       <div className="flex-1 flex flex-col">
//         <Topbar />
//         <div className="p-6 overflow-y-auto">
//           {renderPage()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EmployeeLayout;

import { useState } from "react";
import Sidebar from "../components/employee/layout/Sidebar";
import Topbar from "../components/employee/layout/Topbar";

// imports for pages...
import EmployeeDashboard from "../pages/employee/EmployeeDashboard";
import AssignedTasks from "../pages/employee/AssignedTasks";
import RoomStatus from "../pages/employee/RoomStatus";
import EventsList from "../pages/employee/EventsList";
import InventoryTasks from "../pages/employee/InventoryTasks";
import FnbTasks from "../pages/employee/FnbTasks";
import SupportTickets from "../pages/employee/SupportTickets";

// // Reports
import DailyReport from "../pages/employee/reports/DailyReport";
import TaskReport from "../pages/employee/reports/TaskReport";
import InventoryReport from "../pages/employee/reports/InventoryReport";

// // Misc
import Announcements from "../pages/employee/misc/Announcements";
import Profile from "../pages/employee/misc/Profile";
import LeaveRequest from "../pages/employee/misc/LeaveRequest";
import Calendar from "../pages/employee/misc/Calendar";

function EmployeeLayout() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);


  const renderPage = () => {
  switch (activePage) {

    // Main Pages
    case "Dashboard":
      return <EmployeeDashboard />;

    case "Assigned Tasks":
      return <AssignedTasks />;

    case "Room Status":
      return <RoomStatus />;

    case "Events":
      return <EventsList />;

    case "Inventory":
      return <InventoryTasks />;

    case "F&B Tasks":
      return <FnbTasks />;

    case "Support Tickets":
      return <SupportTickets />;

    // Reports Dropdown Items
    case "Daily Report":
      return <DailyReport />;

    case "Task Report":
      return <TaskReport />;

    case "Inventory Report":
      return <InventoryReport />;

    // Misc Dropdown Items
    case "Announcements":
      return <Announcements />;

    case "Profile":
      return <Profile />;

    case "Leave Request":
      return <LeaveRequest />;

    case "Calendar":
      return <Calendar />;

    default:
      return <EmployeeDashboard />;
  }
};

  return (
    <div className="flex">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        collapsed={collapsed}
      />

       <div className="flex-1 bg-gray-100 min-h-screen transition-all duration-300">
        <Topbar setCollapsed={setCollapsed} collapsed={collapsed} />
        <div className="p-6">{renderPage()}</div>
      </div>
    </div>
  );
}

export default EmployeeLayout;