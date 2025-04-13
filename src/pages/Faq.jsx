import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    question: "What is We Met?",
    answer: "We Met is a modern social media platform designed to help you connect with friends, share moments, and build meaningful relationships. Our platform focuses on authentic connections and engaging content sharing."
  },
  {
    question: "How do I create an account?",
    answer: "Creating an account is simple! Click the 'Sign Up' button, enter your email, create a username, and set a secure password. You can also sign up using your Google or Facebook account for quick access."
  },
  {
    question: "How do I connect with friends?",
    answer: "You can find friends by searching their username, connecting through mutual friends, or importing contacts from your phone. Once connected, you can share posts, stories, and messages with them."
  },
  {
    question: "How do I share content?",
    answer: "Click the '+' button to create a new post. You can share photos, videos, stories, or text posts. You can also customize your privacy settings to control who sees your content."
  },
  {
    question: "How do I reset my password?",
    answer: "If you forgot your password, click on the 'Forgot Password' link on the login page. We'll send a secure reset link to your registered email address. Follow the instructions to create a new password."
  },
  {
    question: "How do I report inappropriate content?",
    answer: "You can report inappropriate content by clicking the three dots menu on any post and selecting 'Report'. Our moderation team will review the content and take appropriate action."
  },
  {
    question: "How do I customize my profile?",
    answer: "Go to your profile page and click the 'Edit Profile' button. You can update your profile picture, bio, and other personal information. You can also customize your profile theme and privacy settings."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white tracking-tight sm:text-6xl">
              How can we help you?
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about We Met. If you can't find what you're looking for, our support team is here to help.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50">
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
                      <svg 
                        className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {activeIndex === index && (
                    <div className="bg-gray-700/50 px-6 py-4 border-t border-gray-700/50">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
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
