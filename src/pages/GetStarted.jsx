import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

const GetStarted = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
      {/* Box Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gray-100 p-10 rounded-3xl shadow-xl text-center max-w-lg w-full"
      >
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          Find Love on <span className="text-red-500">Igotboo</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Create your dating profile, match with compatible singles, and start your journey to finding love.
        </p>

        {/* Animated Rocket Icon */}
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <Rocket size={50} className="text-red-500" />
        </motion.div>

        {/* Get Started Button */}
        <Link 
          to="/app" 
          className="px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-full flex items-center justify-center gap-2 shadow-md hover:bg-red-600 transition-all transform hover:scale-105"
        >
          Create Your Profile
        </Link>
      </motion.div>
    </section>
  );
};

export default GetStarted;
