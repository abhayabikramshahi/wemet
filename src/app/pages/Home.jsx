import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdExplore, MdTrendingUp, MdBookmark, MdAdd } from 'react-icons/md';
import PostFeed from '../components/PostFeed';

const Home = () => {
  const [showHero, setShowHero] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Box with Animation */}
      <AnimatePresence>
        {showHero && (
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto mt-10 px-6"
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl shadow-md p-8 text-center">
              {/* Close Button */}
              <button
                onClick={() => setShowHero(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
                aria-label="Close"
              >
                ×
              </button>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl font-semibold text-gray-900"
              >
                Share Your Story with the World
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-3 text-gray-600 text-base"
              >
                Connect with creators, share your moments, and discover amazing stories from around the globe.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 flex justify-center gap-4"
              >
                <button className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition">
                  Create Post
                </button>
                <button className="px-5 py-2.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 transition">
                  Explore Feed
                </button>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <PostFeed />
          </div>
          <div className="space-y-6 sticky top-24 h-fit hidden md:block">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

const SidebarButton = ({ icon, label }) => (
  <button className="flex flex-col items-center p-3 bg-white rounded-lg border hover:shadow transition">
    <div className="text-blue-600 text-xl mb-1">{icon}</div>
    <span className="text-xs text-gray-700">{label}</span>
  </button>
);

const Sidebar = () => (
  <>
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center shadow-sm">
      <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2" />
      <h3 className="text-gray-900 font-medium">Your Profile</h3>
      <p className="text-sm text-gray-600 mb-2">Manage your posts and info</p>
      <button className="text-sm text-blue-600 hover:underline">View Profile</button>
    </div>

    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-900">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        <SidebarButton icon={<MdExplore />} label="Explore" />
        <SidebarButton icon={<MdTrendingUp />} label="Trending" />
        <SidebarButton icon={<MdBookmark />} label="Saved" />
        <SidebarButton icon={<MdAdd />} label="New Post" />
      </div>
    </div>

    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Get the App</h3>
      <div className="space-y-2">
        <img src="/images/playstore.png" alt="Play Store" className="h-10 rounded" />
        <img src="/images/appstore.png" alt="App Store" className="h-10 rounded" />
      </div>
    </div>

    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Trending Topics</h3>
      <div className="space-y-2 text-sm text-gray-700">
        {['Photography', 'Travel', 'Food', 'Lifestyle'].map((topic) => (
          <div key={topic}>#{topic}</div>
        ))}
      </div>
    </div>
  </>
);

export default Home;
