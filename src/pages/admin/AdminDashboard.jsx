import React from 'react';
import AdminSidebar from "./components/admin/Sidebar";
import AdminHeader from "./components/admin/Header";

const AdminDashboard = () => {
  return (
    <div className="h-full bg-rms-neutral-50">
      <div className="flex">
        <AdminSidebar />

        <div className="flex-1 h-full flex flex-col">
          <AdminHeader />
          <main className="p-6">
            <div className="max-w-7xl mx-auto">
              <div className="rounded-xl bg-white p-8 shadow-rms-soft">
                <h2 className="text-2xl font-bold text-rms-neutral-800">Dashboard (content)</h2>
                <p className="mt-2 text-rms-neutral-600">Place your dashboard widgets here.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
