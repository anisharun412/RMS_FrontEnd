function AnnouncementCard({ title, message, date }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-700">{title}</h3>
        <span className="text-xs text-gray-400">{date}</span>
      </div>

      <p className="text-sm text-gray-600">{message}</p>
    </div>
  );
}

export default AnnouncementCard;