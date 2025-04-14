import React from 'react';
import { motion } from 'framer-motion';
import { FaAndroid, FaChrome, FaGooglePlay } from 'react-icons/fa';

const platforms = [
  {
    name: "Mobile Apps",
    icon: <FaAndroid className="text-4xl text-blue-400" />,
    description: "Access We Met on your mobile devices with our native apps",
    items: [
      {
        name: "Android",
        icon: <FaAndroid className="text-2xl" />,
        description: "Download from Google Play Store",
        link: "#", // Replace with your actual link
        image: "/src/upload/telegram-android.png",
        playstoreLink: "#" // Add your Play Store link here
      }
    ]
  },
  {
    name: "Web Apps",
    icon: <FaChrome className="text-4xl text-blue-400" />,
    description: "Access We Met directly from your web browser",
    items: [
      {
        name: "Web Version",
        icon: <FaChrome className="text-2xl" />,
        description: "Use We Met in your browser",
        link: "#",
        image: "/src/upload/telegram-web.png"
      }
    ]
  }
];

const Apps = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white tracking-tight sm:text-6xl">
              Download We Met
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Access We Met on any device, anywhere. Choose the platform that works best for you.
            </p>
          </div>
        </div>
      </div>

      {/* Platforms Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                {platform.icon}
                <div>
                  <h2 className="text-2xl font-bold text-white">{platform.name}</h2>
                  <p className="text-gray-400">{platform.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {platform.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-700/50 rounded-xl p-4 border border-gray-600/50 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      {item.icon}
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-white">{item.name}</h3>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <a
                        href={item.link}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        Download
                      </a>
                    </div>

                    {/* Play Store Button */}
                    {item.name === "Android" && (
                      <a
                        href={item.playstoreLink} // Use actual Play Store link
                        className="mt-4 inline-flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                      >
                        <FaGooglePlay className="text-2xl" />
                        <span>Get it on Play Store</span>
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-black backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose We Met?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cross-Platform Sync",
                description: "Your messages and data sync seamlessly across all your devices"
              },
              {
                title: "Secure & Private",
                description: "End-to-end encryption ensures your conversations stay private"
              },
              {
                title: "Regular Updates",
                description: "We continuously improve our apps with new features and security updates"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
