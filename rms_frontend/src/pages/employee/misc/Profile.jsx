import EmployeeLayout from "../../../layouts/EmployeeLayout";

function Profile() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        My Profile
      </h2>

      <div className="bg-white p-8 rounded-xl shadow max-w-xl">

        <div className="flex items-center space-x-6 mb-6">
          <div className="w-20 h-20 rounded-full bg-gray-300"></div>
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-gray-500">Housekeeping Staff</p>
          </div>
        </div>

        <div className="space-y-3 text-gray-600">
          <p>Email: john@example.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Employee ID: EMP1023</p>
        </div>

        <button className="mt-6 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:scale-105 transition">
          Edit Profile
        </button>

      </div>
    </div>
  );
}

export default Profile;