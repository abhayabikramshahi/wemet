import { useState } from "react";
import { Bell, X, User, Heart, MessageSquare } from "lucide-react";

const NotificationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      type: "like",
      user: "John Doe",
      content: "liked your post",
      time: "2m ago",
      icon: <Heart className="text-red-500" size={20} />,
    },
    {
      id: 2,
      type: "message",
      user: "Jane Smith",
      content: "sent you a message",
      time: "5m ago",
      icon: <MessageSquare className="text-blue-500" size={20} />,
    },
    {
      id: 3,
      type: "follow",
      user: "Mike Johnson",
      content: "started following you",
      time: "1h ago",
      icon: <User className="text-green-500" size={20} />,
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-red-500 focus:outline-none"
      >
        <Bell size={24} />
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
          <div className="p-4 border-b flex items-center justify-between">
            <h3 className="font-semibold">Notifications</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 hover:bg-gray-50 border-b last:border-b-0 cursor-pointer"
              >
                <div className="flex items-start space-x-3">
                  <div className="mt-1">{notification.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-semibold">{notification.user}</span>{" "}
                      {notification.content}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 text-center border-t">
            <button className="text-sm text-red-500 hover:text-red-600">
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationPopup; 