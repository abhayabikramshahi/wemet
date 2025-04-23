import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  MessageSquare,
  User,
  Bell,
  Settings,
  LogOut,
  Search,
  Users,
  HelpCircle,
  UserPlus,
  Bookmark,
  Newspaper,
  TrendingUp
} from "lucide-react";

const FacebookLayout = ({ children }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const navigation = [
    { name: "Home", href: "/app", icon: Home },
    { name: "Friends", href: "/app/matches", icon: Users },
    { name: "Messages", href: "/app/messages", icon: MessageSquare },
    { name: "Profile", href: "/app/profile", icon: User },
    { name: "Notifications", href: "/app/notifications", icon: Bell },
    { name: "Bookmarks", href: "/app/bookmarks", icon: Bookmark },
  ];

  const shortcuts = [
    { name: "News Feed", icon: Newspaper },
    { name: "Friend Requests", icon: UserPlus },
    { name: "Trending", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 h-14">
        <div className="max-w-screen-2xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/app" className="text-2xl font-bold text-blue-600">Wemet</Link>
            <div className="relative ml-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Wemet"
                className="pl-10 pr-4 py-1.5 bg-gray-100 rounded-full w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
            <Link to="/app/profile" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:ring-2 hover:ring-blue-500">
              <User size={20} className="text-gray-600" />
            </Link>
          </div>
        </div>
      </header>

      <div className="pt-14 flex">
        {/* Left Sidebar */}
        <aside className="fixed left-0 top-14 w-64 h-[calc(100vh-3.5rem)] overflow-y-auto bg-white p-4">
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                >
                  <item.icon size={20} className={isActive ? 'text-blue-600' : 'text-gray-500'} />
                  <span className="ml-3 font-medium">{item.name}</span>
                </Link>
              );
            })}
            <hr className="my-4" />
            <div className="text-gray-600 font-medium px-3 mb-2">Shortcuts</div>
            {shortcuts.map((item) => (
              <button
                key={item.name}
                className="flex items-center w-full px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700"
              >
                <item.icon size={20} className="text-gray-500" />
                <span className="ml-3">{item.name}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 mr-80 min-h-[calc(100vh-3.5rem)] p-6">
          {children}
        </main>

        {/* Right Sidebar */}
        <aside className="fixed right-0 top-14 w-80 h-[calc(100vh-3.5rem)] overflow-y-auto bg-white p-4 border-l">
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-600 font-medium mb-3">Suggested Friends</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <User size={20} className="text-gray-500" />
                      </div>
                      <div>
                        <div className="font-medium">User Name {i}</div>
                        <div className="text-sm text-gray-500">5 mutual friends</div>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-md font-medium">
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <hr />
            <div>
              <h3 className="text-gray-600 font-medium mb-3">Trending Topics</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div className="text-sm text-gray-500">Trending in Social</div>
                    <div className="font-medium mt-1">Trending Topic {i}</div>
                    <div className="text-sm text-gray-500 mt-1">10.5K posts</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default FacebookLayout;