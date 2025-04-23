import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import WeMet from '../images/WeMet.png'

const Home = () => {
  return (
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 px-4 py-8 md:px-16 md:flex-row md:justify-between">
      {/* Left Side - Text */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-md"
      >
        <h1 className="text-3xl font-extrabold text-gray-900 leading-snug">
          Find Your Perfect Match on <span className="text-red-500">Igotboo</span> ❤️
        </h1>
        <p className="text-sm text-gray-600 mt-3">
          Discover meaningful connections, go on exciting dates, and find your special someone in a safe and friendly environment.
        </p>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          className="mt-5 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow-md hover:shadow-lg transition-all mx-auto sm:mx-0"
          onClick={() => window.location.href = '/src/app/'}
        >
          Start Dating <ArrowRight size={18} />
        </motion.button>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="mt-8 md:mt-0 flex justify-center"
      >
        <img 
          src={WeMet}
          alt="Dating App" 
          className="w-[85%] md:w-[350px] rounded-lg shadow-md"
        />
      </motion.div>
    </section>
  );
};

export default Home;
