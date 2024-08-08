import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg">&copy; {new Date().getFullYear()} Alice Mining. All rights reserved.</p>
        <div className="mt-4">
          <a href="#about" className="hover:text-blue-400 mx-2 transition">About</a>
          <a href="#services" className="hover:text-blue-400 mx-2 transition">Services</a>
          <a href="#contact" className="hover:text-blue-400 mx-2 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
