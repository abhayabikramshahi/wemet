import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { Link } from "react-router-dom";

const MessagePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const messages = [
    {
      id: 1,
      user: "Sarah Johnson",
      avatar: "/src/assets/default-avatar.svg",
      content: "Hey, how are you doing?",
      time: "2m ago",
      unread: true,
    },
    {
      id: 2,
      user: "Mike Smith",
      avatar: "/src/assets/default-avatar.svg",
      content: "Thanks for the help earlier!",
      time: "5m ago",
      unread: true,
    },
    {
      id: 3,
      user: "Emma Wilson",
      avatar: "/src/assets/default-avatar.svg",
      content: "Are we still meeting tomorrow?",
      time: "1h ago",
      unread: true,
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-red-500 focus:outline-none"
      >
        <MessageSquare size={24} />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-sm transform transition-transform duration-200 hover:scale-110">
          {messages.filter(msg => msg.unread).length}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
          <div className="p-4 border-b flex items-center justify-between">
            <h3 className="font-semibold">Messages</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {messages.map((message) => (
              <Link
                to="/app/messages"
                key={message.id}
                className="block p-4 hover:bg-gray-50 border-b last:border-b-0"
              >
                <div className="flex items-start space-x-3">
                  <img
                    src={message.avatar}
                    alt={message.user}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-sm">{message.user}</p>
                      <span className="text-xs text-gray-500">{message.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{message.content}</p>
                  </div>
                  {message.unread && (
                    <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className="p-4 text-center border-t">
            <Link
              to="/app/messages"
              className="text-sm text-red-500 hover:text-red-600"
            >
              See all messages
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagePopup;