// SettingsPage.tsx
import React, { useState } from "react";
import {
  User,
  Lock,
  Settings,
  Bell,
  ShieldOff,
} from "lucide-react"; // Optional: Icons

const tabs = [
  { name: "Profile", icon: <User className="w-4 h-4" /> },
  { name: "Account", icon: <Lock className="w-4 h-4" /> },
  { name: "Preferences", icon: <Settings className="w-4 h-4" /> },
  { name: "Notifications", icon: <Bell className="w-4 h-4" /> },
  { name: "Danger Zone", icon: <ShieldOff className="w-4 h-4 text-red-500" /> },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Profile":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Edit Profile</h2>
            <input
              type="text"
              defaultValue="riley_dater"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Username"
            />
            <textarea
              defaultValue="Just here to vibe ✨"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Bio"
            />
          </div>
        );
      case "Account":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Account Info</h2>
            <p>Email: <span className="text-gray-600">riley@email.com</span></p>
            <button className="text-pink-600 font-medium hover:underline">
              Change Password
            </button>
          </div>
        );
      case "Preferences":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Preferences</h2>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-pink-500" />
              Dark Mode
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-pink-500" defaultChecked />
              Show Online Status
            </label>
          </div>
        );
      case "Notifications":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Notification Settings</h2>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-pink-500" defaultChecked />
              Push Notifications
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-pink-500" />
              Email Updates
            </label>
          </div>
        );
      case "Danger Zone":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-red-600">Danger Zone</h2>
            <button className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Delete Account
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-6xl mx-auto md:flex gap-8">
        {/* Sidebar */}
        <aside className="md:w-1/4 mb-6 md:mb-0">
          <div className="bg-white rounded-xl shadow-md p-4 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition ${
                  activeTab === tab.name
                    ? "bg-pink-100 text-pink-600 font-semibold"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:flex-1 bg-white rounded-xl shadow-md p-6">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
}
