import React from 'react';

const Banner = () => {
  return (
    <section className="relative h-screen bg-gray-900 text-white text-center">
      <div className="absolute inset-0">
        <img src="/banner1.jpeg" alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Filtro oscuro para mejorar la legibilidad del texto */}
      </div>
      <div className="relative flex flex-col justify-center items-center h-full px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text">
          Welcome to Alice Mining
        </h1>
        <p className="text-lg md:text-xl mb-8">Soluciones innovadoras para el futuro de la tecnología minera.</p>
        <a href="#services" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transform hover:scale-105 transition">
          Learn More
        </a>
      </div>
    </section>
  );
}

export default Banner;
