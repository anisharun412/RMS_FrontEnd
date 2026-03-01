// src/App.jsx
import AdminHeader from "./components/admin/AdminHeader";
import AdminSidebar from "./components/admin/AdminSidebar";
import AdminDashboardContent from "./components/admin/AdminDashboardContent";
import "./styles/tailwind.css"

export default function App() {
  return (
    <div className="h-full bg-[var(--rms-neutral-100)] p-4">
      <div className="h-full flex gap-4">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main column */}
        <div className="flex-1 flex flex-col gap-4">
          <AdminHeader />
          <div className="flex-1">
            <AdminDashboardContent />
          </div>
        </div>
      </div>
    </div>
  );
}