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
        About <span className="text-black">Raw</span> 🚀
      </motion.h1>
      <p className="text-gray-600 text-lg text-center mt-4 max-w-3xl">
     Raw truth, human focus: no drama, just clarity. We embrace unfiltered honesty, forging authentic connections. Cutting through noise, we reveal what truly matters, uniting humanity in a shared pursuit of understanding, compassion, and unwavering commitment to truth. <span className="font-bold">genuine connections</span>! 
      </p>

    </section>
  );
};

export default About;
