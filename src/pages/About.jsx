import { motion } from "framer-motion";
import { Users, MessageCircle, HeartHandshake } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen bg-white px-8 md:px-20 py-10 flex flex-col items-center justify-center">
      {/* Title Section */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-gray-900 text-center"
      >
        About <span className="text-red-500">Igotboo</span> 🚀
      </motion.h1>
      <p className="text-gray-600 text-lg text-center mt-4 max-w-3xl">
      Igotboo is a modern dating platform where singles meet their perfect match, share meaningful moments, and build lasting relationships. Say goodbye to casual encounters and hello to <span className="font-bold">genuine connections</span>! 
      </p>

      {/* Cards Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 - Community */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col items-center text-center"
        >
          <Users size={50} className="text-red-500" />
          <h2 className="text-2xl font-bold mt-4">Smart Matching</h2>
          <p className="text-gray-600 mt-2">
            Our intelligent algorithm helps you find compatible matches based on your interests, values, and preferences.
          </p>
        </motion.div>

        {/* Card 2 - Messaging */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col items-center text-center"
        >
          <MessageCircle size={50} className="text-red-500" />
          <h2 className="text-2xl font-bold mt-4">Safe Dating</h2>
          <p className="text-gray-600 mt-2">
            Enjoy secure messaging, verified profiles, and safety features that let you focus on finding love.
          </p>
        </motion.div>

        {/* Card 3 - Relationships */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col items-center text-center"
        >
          <HeartHandshake size={50} className="text-red-500" />
          <h2 className="text-2xl font-bold mt-4">Find True Love</h2>
          <p className="text-gray-600 mt-2">
            Connect with genuine singles, go on meaningful dates, and discover your perfect match!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
