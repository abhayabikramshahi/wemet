import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What is We Met?",
    answer: "We Met is a modern social media platform designed to help you connect with friends, share moments, and build meaningful relationships."
  },
  {
    question: "How do I create an account?",
    answer: "Click 'Sign Up', enter your email, create a username and password. You can also sign up via Google or Facebook."
  },
  {
    question: "How do I connect with friends?",
    answer: "Search usernames, use mutual connections, or import contacts to find and connect with friends."
  },
  {
    question: "How do I share content?",
    answer: "Click the '+' to post. Share photos, videos, or text. You can also tweak privacy settings for each post."
  },
  {
    question: "How do I reset my password?",
    answer: "Click 'Forgot Password' on the login page. A reset link will be sent to your registered email."
  },
  {
    question: "How do I report inappropriate content?",
    answer: "Tap the three dots on a post, then 'Report'. Our mods will handle it fast."
  },
  {
    question: "How do I customize my profile?",
    answer: "Go to your profile and hit 'Edit'. Update your info, change profile picture, and adjust your theme and privacy settings."
  },
  {
    question: "Is We Met free to use?",
    answer: "Yup. We Met is 100% free with optional premium features if you want to level up your experience."
  },
  {
    question: "Can I deactivate my account anytime?",
    answer: "Totally. Just go to Settings > Account > Deactivate. Your data stays safe if you ever wanna return."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white tracking-tight sm:text-6xl">
              How can we help you?
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about We Met. If you're still stuck, we're one click away.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-black backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div 
                  key={index}
                  className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div 
                    className="px-6 py-4 cursor-pointer transition-colors duration-300"
                    onClick={() => toggleAnswer(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <motion.svg
                        className="w-5 h-5 text-gray-400"
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>
                  </div>
                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-gray-700/50 px-6 py-4 border-t border-gray-700/50 overflow-hidden"
                      >
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <Link 
            to="/contact-support"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
          >
            Contact Support
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
