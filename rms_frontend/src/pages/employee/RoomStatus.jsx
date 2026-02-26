import EmployeeLayout from "../../layouts/EmployeeLayout";
import RoomCard from "../../components/employee/cards/RoomCard";
const rooms = [
  { id: 101, type: "Deluxe", status: "Vacant" },
  { id: 102, type: "Suite", status: "Occupied" },
  { id: 103, type: "Standard", status: "Cleaning" },
  { id: 104, type: "Deluxe", status: "Maintenance" },
  { id: 105, type: "Suite", status: "Vacant" },
  { id: 106, type: "Standard", status: "Occupied" },
];

function RoomStatus() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Room Status
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}



export default RoomStatus;