import React, { useState } from "react";
import { faq } from "../Utility/Data";
import { FaMinusCircle } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Frequently Asked Questions..?
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Frequently Asked Questions offers quick answers to common queries,
          guiding users through features and functionalities effortlessly.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-2xl mx-auto">
        {faq.map((fq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg mb-4 shadow-sm bg-white"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <span className="font-semibold text-gray-800 text-base sm:text-lg">
                {fq.questions}
              </span>
              <span className="text-xl text-gray-600">
                {openIndex === index ? <FaMinusCircle /> : <IoMdAddCircle />}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-4 pb-3 text-gray-700 text-sm sm:text-base">
                {fq.answers}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
