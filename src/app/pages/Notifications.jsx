// NotificationPage.tsx
import React from "react";
import { Bell, Heart, MessageCircle, UserPlus } from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: <Heart className="text-pink-500" />,
    title: "New Like",
    message: "Alex liked your profile.",
    time: "2m ago",
  },
  {
    id: 2,
    icon: <MessageCircle className="text-blue-500" />,
    title: "New Message",
    message: "Jamie sent you a message.",
    time: "10m ago",
  },
  {
    id: 3,
    icon: <UserPlus className="text-green-500" />,
    title: "New Match",
    message: "You matched with Riley!",
    time: "1h ago",
  },
  {
    id: 4,
    icon: <Bell className="text-yellow-500" />,
    title: "App Update",
    message: "New features have been added.",
    time: "3h ago",
  },
];

export default function NotificationPage() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Notifications
        </h2>
        {notifications.map((note) => (
          <div
            key={note.id}
            className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-2 bg-gray-100 rounded-full">{note.icon}</div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-base md:text-lg">{note.title}</p>
                <p className="text-xs text-gray-400">{note.time}</p>
              </div>
              <p className="text-sm md:text-base text-gray-600 mt-1">
                {note.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
