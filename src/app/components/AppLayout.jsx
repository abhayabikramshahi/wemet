import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../upload/logo.png';
import {
  Home,
  Mail,
  User,
  Bell,
  Settings,
  HelpCircle,
  Feather,
  MoreHorizontal,
  Users,
  Plus,
} from "lucide-react";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isPostOpen, setIsPostOpen] = useState(false); // State for opening the post modal
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const profileCompletion = 30;
  const matchCount = 5;

  const navigation = [
    { name: "Home", href: "/app", icon: Home },
    { name: "Messages", href: "/app/messages", icon: Mail },
    { name: "Profile", href: "/app/profile", icon: User },
    { name: "Notifications", href: "/app/notifications", icon: Bell },
    { name: "Settings", href: "/app/settings", icon: Settings },
    { name: "Post", href: "#", icon: Feather, onClick: () => setIsPostOpen(true) },
    { name: "More", href: "#", icon: MoreHorizontal, onClick: () => setIsMoreOpen(true) },
  ];

  const mobileNavigation = [
    { name: "Home", href: "/app", icon: Home },
    { name: "Messages", href: "/app/messages", icon: Mail },
    { name: "Post", href: "#", icon: Feather, onClick: () => setIsPostOpen(true) },
    { name: "Notifications", href: "/app/notifications", icon: Bell },
    { name: "Profile", href: "/app/profile", icon: User },
  ];

  const moreOptions = [
    { name: "Help & Support", href: "/app/help" },
    { name: "Settings", href: "/app/settings" },
    { name: "Privacy Policy", href: "/app/privacy" },
    { name: "Logout", href: "/logout" },
  ];

  const handlePhotoSelection = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPhoto(URL.createObjectURL(file));
    }
  };

  const handleVideoSelection = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedVideo(URL.createObjectURL(file));
    }
  };

  const DEFAULT_AVATAR = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFNUU3RUIiLz48cGF0aCBkPSJNMTAwIDEyMEM4NS4xNDcyIDEyMCA3Mi41OTk5IDEwNy40NTMgNzIuNTk5OSA5Mi42MDAxQzcyLjU5OTkgNzcuNzQ3MyA4NS4xNDcyIDY1LjIwMDEgMTAwIDY1LjIwMDFDMTE0Ljg1MyA2NS4yMDAxIDEyNy40IDc3Ljc0NzMgMTI3LjQgOTIuNjAwMUMxMjcuNCAxMDcuNDUzIDExNC44NTMgMTIwIDEwMCAxMjBaIiBmaWxsPSIjOTRBM0IzIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMDAgMjAwQzQ0Ljc3MTUgMjAwIDAgMTU1LjIyOCAwIDEwMEMwIDQ0Ljc3MTUgNDQuNzcxNSAwIDEwMCAwQzE1NS4yMjggMCAyMDAgNDQuNzcxNSAyMDAgMTAwQzIwMCAxNTUuMjI4IDE1NS4yMjggMjAwIDEwMCAyMDBaTTEwMCAxODBDMTQ0LjE4MyAxODAgMTgwIDE0NC4xODMgMTgwIDEwMEMxODAgNTUuODE3MiAxNDQuMTgzIDIwIDEwMCAyMEM1NS44MTcyIDIwIDIwIDU1LjgxNzIgMjAgMTAwQzIwIDE0NC4xODMgNTUuODE3MiAxODAgMTAwIDE4MFoiIGZpbGw9IiM5NEEzQjMiLz48L3N2Zz4=';
  return (
    <div className="flex bg-gray-50 text-sm font-sans antialiased min-h-screen">
      {/* Sidebar (Desktop) */}
      <div className="hidden sm:flex w-20 bg-white flex-col shadow-sm pl-4 pr-4">
        {/* Logo */}
        <div className="p-4 flex items-center justify-center">
          <Link to="/app">
            <img src={Logo} alt="Logo" className="w-10 h-10 rounded-md mt-4" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 space-y-2 fixed mt-4">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                title={item.name}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick(); // This will trigger the modal for "Post"
                  }
                }}
                className={`group flex items-center justify-center px-3 py-2 rounded-full transition-all ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-900 hover:bg-gray-100"
                }`}
              >
                <div className="relative flex-shrink-0">
                  <item.icon
                    size={28}
                    className={`${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-900 group-hover:text-blue-500"
                    }`}
                  />
                  {item.badge && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-4 mt-auto space-y-2">
          <Link
            to="/app/help"
            title="Help & Support"
            className="flex items-center justify-center px-3 py-2 rounded-full text-gray-900 hover:bg-gray-100"
          >
            <HelpCircle size={28} className="text-gray-900" />
          </Link>
          <Link
            to="/app/profile"
            title="Profile"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
          >
            <img
              className="h-8 w-8 rounded-full"
              src={DEFAULT_AVATAR}
              alt=""
            />
            <span>Profile</span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white shadow-t z-40">
        <nav className="flex justify-around py-2 px-2">
          {mobileNavigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                title={item.name}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick(); // This will trigger the modal for "Post"
                  }
                }}
                className={`group flex items-center justify-center px-2 py-2 rounded-full transition-all ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-900 hover:bg-gray-100"
                }`}
              >
                <item.icon
                  size={24}
                  className={`${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-900 group-hover:text-blue-500"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* More Popup */}
      {isMoreOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm px-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">More</h2>
              <button
                onClick={() => setIsMoreOpen(false)}
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-2">
              {moreOptions.map((option) => (
                <Link
                  key={option.name}
                  to={option.href}
                  onClick={() => setIsMoreOpen(false)}
                  className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
                >
                  {option.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Post Popup */}
      {isPostOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm px-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 space-y-4 relative overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-black">Create a Post</h2>
              <button
                onClick={() => setIsPostOpen(false)}
                className="text-gray-500 hover:text-gray-900 absolute top-4 right-4"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <img
                src={DEFAULT_AVATAR}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-black font-medium">Abhaya Bikram Shahi</p>
                <p className="text-gray-500 text-sm">@abhayashahi</p>
              </div>
            </div>
            <textarea
              rows={4}
              placeholder="What's on your mind?"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
            />
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer text-gray-600 hover:text-pink-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828L18 10.828V7h-2.828z"
                    />
                  </svg>
                  <span className="text-sm">Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoSelection}
                    className="hidden"
                  />
                </label>
                <label className="flex items-center space-x-2 cursor-pointer text-gray-600 hover:text-pink-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14m-6 0l-4.553 2.276A2 2 0 012 14.382V9.618a2 2 0 012.447-1.894L9 10m6 0l-6 4m6-4L9 6m0 4l6-4"
                    />
                  </svg>
                  <span className="text-sm">Video</span>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoSelection}
                    className="hidden"
                  />
                </label>
              </div>
              {selectedPhoto && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700">Selected Photo:</p>
                  <img
                    src={selectedPhoto}
                    alt="Selected"
                    className="w-full h-auto rounded-md mt-2"
                  />
                </div>
              )}
              {selectedVideo && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700">Selected Video:</p>
                  <video
                    controls
                    src={selectedVideo}
                    className="w-full h-auto rounded-md mt-2"
                  />
                </div>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A4 4 0 1012 16m0 0v1m0-1h1m-1 0H11"
                    />
                  </svg>
                  <span className="text-sm">Feeling</span>
                </button>
              </div>
              <button
                className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
                onClick={() => {
                  // Add post handling logic here
                  setIsPostOpen(false);
                }}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <div className="h-14 bg-white flex items-center justify-between px-4 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
            {navigation.find((item) => item.href === location.pathname)?.name || "App"}
          </h2>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Notifications">
              <Bell size={28} className="text-gray-900" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Add new">
              <Plus size={28} className="text-gray-900" />
            </button>
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-4 pb-16 sm:pb-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
