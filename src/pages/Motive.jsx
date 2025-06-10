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
        Our <span className="text-gray-600">Mission</span> ❤️
      </motion.h1>
      <p className="text-gray-600 text-lg text-center mt-4 max-w-3xl">
       Raw is the platform where genuine connections thrive. We believe in fostering real relationships through unfiltered honesty and shared values. Our mission is to create a safe, inclusive, and engaging environment for singles to meet, connect, and build meaningful relationships. Join us in our journey to redefine online dating with authenticity and purpose!
      </p>

     

      
    </section>
  );
};

export default Motive;
