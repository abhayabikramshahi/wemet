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
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative py-24">
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
      <div className="pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 py-[40px]">
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
        <div className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-8 mx-4">
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
        <div className="mt-8 bg-black backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-8 mx-4">
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

export const ReportContent = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Report Content</h1>
      <p className="mb-6">Use this page to report inappropriate or harmful content. Please provide as much detail as possible to help us address the issue effectively.</p>

      <form className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="contentType" className="block text-sm font-medium text-gray-700">Content Type</label>
          <select id="contentType" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
            <option>Text</option>
            <option>Image</option>
            <option>Video</option>
            <option>Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea id="description" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Describe the issue..."></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">Attachment (optional)</label>
          <input type="file" id="attachment" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Submit Report</button>
      </form>
    </div>
  );
};