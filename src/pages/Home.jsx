import logo from "../upload/logo.jpg"; // Replace with your logo
import telegramLogo from "../upload/logo.jpg"; // Make sure to add a Telegram-like logo
import { FaAndroid, FaApple } from "react-icons/fa";
import androidImage from "../upload/telegram-android.png";
import iosImage from "../upload/telegram-ios.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="flex justify-center items-center min-h-screen py-12 px-4">
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Left Section (Logo + Title) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left md:w-1/2"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src={telegramLogo} 
              alt="Telegram Logo" 
              className="w-40 mx-auto md:mx-0 rounded-full shadow-lg shadow-blue-500/20" 
            />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold text-white mt-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            >
              Telegram
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-xl mt-4"
            >
              A new era of messaging
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex gap-4 justify-center md:justify-start"
            >
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-500/20">
                Get Started
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-400 rounded-full hover:bg-blue-600/10 transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Section (Recent News) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Recent News</h2>
            <div className="space-y-6">
              {[
                {
                  date: "Mar 7",
                  title: "Star Messages, Pinned Gifts, Verification Platform 2.0, and More"
                },
                {
                  date: "Feb 12",
                  title: "AI-Powered Sticker Search, Improved Videos and More"
                },
                {
                  date: "Jan 24",
                  title: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More"
                }
              ].map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="group cursor-pointer"
                >
                  <p className="text-gray-400 text-sm font-medium">{news.date}</p>
                  <p className="text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
                    {news.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Devices Section */}
      <div className="bg-gray-800/30 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Available on All Devices
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-16">
            {/* Android Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center group"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src={androidImage} 
                alt="Telegram on Android" 
                className="w-72 mx-auto rounded-xl shadow-lg shadow-blue-500/20" 
              />
              <div className="flex items-center justify-center text-blue-400 font-medium mt-6 group-hover:text-blue-300 transition-colors duration-300">
                <FaAndroid className="text-3xl mr-3" />
                <span>Telegram for <strong>Android</strong></span>
              </div>
            </motion.div>

            {/* iOS Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center group"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src={iosImage} 
                alt="Telegram on iOS" 
                className="w-72 mx-auto rounded-xl shadow-lg shadow-blue-500/20" 
              />
              <div className="flex items-center justify-center text-blue-400 font-medium mt-6 group-hover:text-blue-300 transition-colors duration-300">
                <FaApple className="text-3xl mr-3" />
                <span>Telegram for <strong>iPhone</strong> / <strong>iPad</strong></span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
