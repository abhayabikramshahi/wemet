import logo from "../upload/logo.jpg";
import telegramLogo from "../upload/unnamed.png";
import { FaAndroid } from "react-icons/fa";
import androidImage from "../upload/telegram-android.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className=" w-full min-h-screen overflow-hidden m-0 p-0">
      {/* Hero Section */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8 px-4">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileHover={{ scale: 1.02 }}
            className="text-center md:text-left md:w-1/2"
          >
            <motion.img
              src={telegramLogo}
              alt="Telegram Logo"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
              className="w-40 mx-auto md:mx-0 rounded-full shadow-lg shadow-blue-500/20"
            />
            <motion.h1
              className="text-5xl font-bold text-white mt-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
            >
              RAW
            </motion.h1>
            <motion.p
              className="text-gray-300 text-xl mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.5 }}
            >
              A new era of messaging
            </motion.p>
            <motion.div
              className="mt-8 flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.7 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-500/30"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 border border-blue-600 text-blue-400 rounded-full hover:bg-blue-600/20 transition duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="md:w-1/2  p-6 rounded-xl border border-gray-800"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
          >
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Recent News</h2>
            <div className="space-y-6">
              {["Mar 7", "Feb 12", "Jan 24"].map((date, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                >
                  <p className="text-gray-400 text-sm font-medium">{date}</p>
                  <p className="text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
                    {[
                      "Star Messages, Pinned Gifts, Verification Platform 2.0, and More",
                      "AI-Powered Sticker Search, Improved Videos and More",
                      "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More"
                    ][index]}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Devices Section */}
      <div className=" py-16 px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Available on All Devices
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          {/* Android */}
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <motion.img
              src={androidImage}
              alt="Telegram on Android"
              className="w-72 mx-auto rounded-xl shadow-lg shadow-blue-500/20"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <div className="flex items-center justify-center text-blue-400 font-medium mt-6 group-hover:text-blue-300 transition duration-300">
              <FaAndroid className="text-3xl mr-3" />
              <span>Telegram for <strong>Android</strong></span>
            </div>
          </motion.div>

          {/* Web */}
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <motion.div
              className="w-72 h-44 mx-auto rounded-xl shadow-lg shadow-blue-500/20 bg-white flex items-center justify-center"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <span className="text-3xl font-bold text-blue-600">WEB</span>
            </motion.div>
            <div className="flex items-center justify-center text-blue-400 font-medium mt-6 group-hover:text-blue-300 transition duration-300">
              <span>Telegram for <strong>Web</strong></span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
