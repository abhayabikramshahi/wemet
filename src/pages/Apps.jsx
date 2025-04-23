import { motion } from "framer-motion";
import { Heart, MessageCircle, UserCheck, MapPin, Gift, Calendar } from "lucide-react";

const Apps = () => {
  const features = [
    {
      icon: <Heart size={40} className="text-red-500" />,
      title: "Smart Matching",
      description: "Our AI-powered algorithm finds your perfect match based on compatibility."
    },
    {
      icon: <MessageCircle size={40} className="text-blue-500" />,
      title: "Instant Chat",
      description: "Connect instantly with your matches through our secure messaging system."
    },
    {
      icon: <UserCheck size={40} className="text-green-500" />,
      title: "Verified Profiles",
      description: "All profiles are verified to ensure you're meeting genuine people."
    },
    {
      icon: <MapPin size={40} className="text-purple-500" />,
      title: "Local Dating",
      description: "Find matches in your area and discover local dating spots."
    },
    {
      icon: <Gift size={40} className="text-pink-500" />,
      title: "Virtual Gifts",
      description: "Send virtual gifts to break the ice and show your interest."
    },
    {
      icon: <Calendar size={40} className="text-orange-500" />,
      title: "Date Planning",
      description: "Plan and schedule dates directly through the app."
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          App <span className="text-red-500">Features</span> 🚀
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Discover all the amazing features that make Igotboo the perfect platform for finding your special someone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => window.location.href = '/src/app/'}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all transform hover:scale-105"
          >
            Try These Features Now
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Apps;