import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserShield, FaExclamationTriangle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const guidelines = [
  {
    title: "Community Guidelines",
    description: "Our community guidelines help maintain a safe and respectful environment for all users.",
    items: [
      {
        title: "Respectful Communication",
        description: "Treat all users with respect. No harassment, hate speech, or bullying.",
        icon: <FaUserShield className="text-2xl text-blue-400" />
      },
      {
        title: "Content Standards",
        description: "Share appropriate content that doesn't violate our terms of service.",
        icon: <FaCheckCircle className="text-2xl text-green-400" />
      },
      {
        title: "Prohibited Content",
        description: "No spam, illegal content, or harmful material is allowed.",
        icon: <FaTimesCircle className="text-2xl text-red-400" />
      }
    ]
  },
  {
    title: "Moderation Process",
    description: "Learn how our moderation team handles reported content and maintains community standards.",
    items: [
      {
        title: "Content Review",
        description: "All reported content is reviewed by our trained moderation team.",
        icon: <FaShieldAlt className="text-2xl text-blue-400" />
      },
      {
        title: "Action Taken",
        description: "Appropriate actions are taken based on the severity of violations.",
        icon: <FaExclamationTriangle className="text-2xl text-yellow-400" />
      },
      {
        title: "Appeal Process",
        description: "Users can appeal moderation decisions through our support system.",
        icon: <FaUserShield className="text-2xl text-green-400" />
      }
    ]
  }
];

const prohibitedContent = [
  "Hate speech and discrimination",
  "Harassment and bullying",
  "Spam and commercial content",
  "Illegal activities",
  "Adult or inappropriate content",
  "Violence and graphic content",
  "Misinformation and fake news",
  "Personal information sharing"
];

const Moderation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white tracking-tight sm:text-6xl">
              Content Moderation
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              We're committed to maintaining a safe and respectful environment for all users. Learn about our moderation policies and guidelines.
            </p>
          </div>
        </div>
      </div>

      {/* Guidelines Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {guidelines.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
              <p className="text-gray-400 mb-6">{section.description}</p>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: itemIndex * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">{item.title}</h3>
                      <p className="text-gray-400 mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prohibited Content Section */}
        <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Prohibited Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {prohibitedContent.map((content, index) => (
              <motion.div
                key={content}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-700/50 rounded-lg p-4 border border-gray-600/50 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-2">
                  <FaTimesCircle className="text-red-400" />
                  <span className="text-gray-300">{content}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reporting Section */}
        <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Report Inappropriate Content</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              If you encounter content that violates our guidelines, please report it immediately. Our moderation team will review and take appropriate action.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
            >
              Report Content
              <FaExclamationTriangle className="ml-2 -mr-1 w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moderation; 