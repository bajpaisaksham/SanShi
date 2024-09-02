import React from 'react';


const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h1>
      <form className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg space-y-6">
        {/* Name Input */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-gray-600 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
            placeholder="Your Name"
          />
        </div>
        
        {/* Message Input */}
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-gray-600 font-medium">
            Message
          </label>
          <textarea
            id="message"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none transition h-32 resize-none"
            placeholder="Your Message"
          />
        </div>
        
        {/* Submit Button */}
        <button className="w-full py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition transform hover:-translate-y-1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
