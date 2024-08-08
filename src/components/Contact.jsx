import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input type="text" id="name" className="w-full p-3 bg-gray-700 border-2 border-blue-500 rounded-lg text-white focus:border-blue-400 transition" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
            <input type="email" id="email" className="w-full p-3 bg-gray-700 border-2 border-blue-500 rounded-lg text-white focus:border-blue-400 transition" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea id="message" className="w-full p-3 bg-gray-700 border-2 border-blue-500 rounded-lg text-white focus:border-blue-400 transition" rows="4" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transform hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
