import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:bg-gray-600 transition">
            <h3 className="text-2xl font-bold mb-4">Consulting</h3>
            <p>
              Expert consulting services to guide your mining operations towards greater efficiency and success.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:bg-gray-600 transition">
            <h3 className="text-2xl font-bold mb-4">Technology Solutions</h3>
            <p>
              Cutting-edge technology solutions designed to improve performance and sustainability in mining.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:bg-gray-600 transition">
            <h3 className="text-2xl font-bold mb-4">Support & Maintenance</h3>
            <p>
              Comprehensive support and maintenance services to ensure the smooth operation of your mining technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
