import React, { useState } from 'react';

const faqData = [
  {
    question: "What is We Met?",
    answer: "We Met is a social media platform to connect people and share exciting content with your friends and followers."
  },
  {
    question: "How do I create an account?",
    answer: "To create an account, click on the signup button and enter your details."
  },
  {
    question: "How do I reset my password?",
    answer: "If you forgot your password, click on the 'Forgot Password' link and follow the instructions."
  },
  // Add more FAQs as needed
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div 
              className="px-6 py-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-xl font-medium text-gray-700">{faq.question}</h3>
            </div>
            {activeIndex === index && (
              <div className="bg-gray-50 px-6 py-4 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
