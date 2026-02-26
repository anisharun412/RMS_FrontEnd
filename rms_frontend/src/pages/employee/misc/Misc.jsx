import Announcements from "./Announcements";
import Profile from "./Profile";
import LeaveRequest from "./LeaveRequest";
import Calendar from "./Calendar";

function Misc() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Misc
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Announcements />
        <Profile />
        <LeaveRequest />
        <Calendar />
      </div>
    </div>
  );
}

export default Misc;