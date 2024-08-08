import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-extrabold hover:text-blue-500 transition">Alice Mining</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
