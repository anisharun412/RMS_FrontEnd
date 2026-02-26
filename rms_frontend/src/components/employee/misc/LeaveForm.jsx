import { useState } from "react";

function LeaveForm() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Leave request submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow space-y-4"
    >
      <h3 className="text-lg font-semibold text-gray-700">
        Leave Request
      </h3>

      <div>
        <label className="text-sm text-gray-600">From</label>
        <input
          type="date"
          name="from"
          value={formData.from}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          required
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">To</label>
        <input
          type="date"
          name="to"
          value={formData.to}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          required
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">Reason</label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          rows="3"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2 rounded-lg hover:scale-105 transition"
      >
        Submit Request
      </button>
    </form>
  );
}

export default LeaveForm;