import logo from "../upload/logo.jpg"; // Replace with your logo
import telegramLogo from "../upload/logo.jpg"; // Make sure to add a Telegram-like logo
import { FaAndroid, FaApple } from "react-icons/fa";
import androidImage from "../upload/telegram-android.png";
import iosImage from "../upload/telegram-ios.png";

const Home = () => {
  return (
    <div>
      {/* Top Section (Logo + Recent News) */}
      <div className="flex justify-center items-center min-h-screen bg-white py-12">
        <div className="w-3/4 flex flex-col md:flex-row justify-between items-center">
          {/* Left Section (Logo + Title) */}
          <div className="text-center md:text-left md:w-2/3">
            <img src={telegramLogo} alt="Telegram Logo" className="w-32 mx-auto md:mx-0" />
            <h1 className="text-3xl font-semibold text-gray-800 mt-4">Telegram</h1>
            <p className="text-gray-500 text-lg">a new era of messaging</p>
          </div>

          {/* Right Section (Recent News) */}
          <div className="md:w-1/3 border-l-4 border-blue-500 pl-6 mt-6 md:mt-0">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Recent News</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="text-gray-900 font-semibold">Mar 7</p>
                <p className="text-blue-500 cursor-pointer hover:underline">
                  Star Messages, Pinned Gifts, Verification Platform 2.0, and More
                </p>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Feb 12</p>
                <p className="text-blue-500 cursor-pointer hover:underline">
                  AI-Powered Sticker Search, Improved Videos and More
                </p>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Jan 24</p>
                <p className="text-blue-500 cursor-pointer hover:underline">
                  Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Devices Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 p-8 border-t border-gray-300">
        {/* Android Section */}
        <div className="text-center">
          <img src={androidImage} alt="Telegram on Android" className="w-72 mx-auto" />
          <div className="flex items-center justify-center text-blue-600 font-medium mt-4">
            <FaAndroid className="text-2xl mr-2" />
            <span>Telegram for <strong>Android</strong></span>
          </div>
        </div>

        {/* iOS Section */}
        <div className="text-center">
          <img src={iosImage} alt="Telegram on iOS" className="w-72 mx-auto" />
          <div className="flex items-center justify-center text-blue-600 font-medium mt-4">
            <FaApple className="text-2xl mr-2" />
            <span>Telegram for <strong>iPhone</strong> / <strong>iPad</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
