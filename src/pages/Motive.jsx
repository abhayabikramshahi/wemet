import { motion } from "framer-motion";
import { Users, Handshake, Sparkles } from "lucide-react";

const Motive = () => {
  return (
    <section className="min-h-screen bg-white px-8 md:px-20 py-10 flex flex-col items-center justify-center">
      {/* Title Section */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-gray-900 text-center"
      >
        Our <span className="text-red-500">Mission</span> ❤️
      </motion.h1>
      <p className="text-gray-600 text-lg text-center mt-4 max-w-3xl">
        Igotboo is more than just a dating app. Our mission is to help singles find meaningful relationships, create lasting connections, and discover their perfect match. 💑
      </p>

      {/* Motive Cards Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 - Real Connections */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col items-center text-center"
        >
          <Users size={50} className="text-red-500" />
          <h2 className="text-2xl font-bold mt-4">Quality Matches</h2>
          <p className="text-gray-600 mt-2">
            We're committed to connecting compatible singles based on shared values, interests, and relationship goals.
          </p>
        </motion.div>

        {/* Card 2 - Positive Impact */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col items-center text-center"
        >
          <Handshake size={50} className="text-red-500" />
          <h2 className="text-2xl font-bold mt-4">Safe Dating</h2>
          <p className="text-gray-600 mt-2">
            We prioritize user safety with verified profiles, secure messaging, and comprehensive safety guidelines for online and offline dating.
          </p>
        </motion.div>

        {/* Card 3 - Innovation & Growth */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col items-center text-center"
        >
          <Sparkles size={50} className="text-red-500" />
          <h2 className="text-2xl font-bold mt-4">Successful Relationships</h2>
          <p className="text-gray-600 mt-2">
            We're dedicated to helping singles find lasting love through our innovative matching system and relationship-focused features.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Motive;
