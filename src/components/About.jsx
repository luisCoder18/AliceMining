import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="path/to/image.jpg" alt="About Us" className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition"/>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed mb-4">
              We are a leading company in the mining technology sector, providing innovative solutions to enhance efficiency and sustainability in the industry.
            </p>
            <p className="text-lg leading-relaxed">
              Our team of experts is dedicated to pushing the boundaries of mining technology and delivering cutting-edge solutions to our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
