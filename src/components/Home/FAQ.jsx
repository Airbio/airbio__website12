import React, { useState } from 'react';

const FAQ = () => {
  // Sample FAQ data
  const faqData = [
    {
      question: 'What products does AirBio Technologies offer?',
      answer: 'AirBio specializes in biosafety cabinets,ductless fume hoods, laminar flow solutions, and customized safety solutions for laboratories, healthcare facilities, and industrial environments.',
    },
    {
      question: 'What makes AirBio’s biosafety cabinets unique?',
      answer: 'You can track your order by visiting the "Order History" section in your account.',
    },
    {
      question: 'Do your products meet industry standards?',
      answer: '',
    },
    {
      question: 'Can AirBio provide custom solutions?',
      answer: '',
    },
    {
      question: 'Does AirBio offer installation and maintenance support?',
      answer: '',
    },
    {
      question: 'How often should biosafety cabinets be serviced?',
      answer: '',
    },
  ];

  // State to track which question is currently open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the open/close state of the answer
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">FAQs AirBio Technologies</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border bg-[#F5F5F5] rounded-lg p-2 px-4 border-gray-300 pb-3">
            {/* Question Section */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <button
                className="text-xl font-bold focus:outline-none"
                aria-label="Toggle Answer"
              >
                {openIndex === index ? '×' : '+'}
              </button>
            </div>
            {/* Answer Section */}
            {openIndex === index && (
              <div className="mt-2 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
