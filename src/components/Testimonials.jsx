import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      title: "CEO of TechCorp",
      message: "Alice Mining has revolutionized our approach to mining technology. Their innovative solutions and expert team have significantly improved our operational efficiency.",
      image: "path/to/jane.jpg",
    },
    {
      name: "John Smith",
      title: "Head of Operations at Mining Solutions",
      message: "The team at Alice Mining is incredibly knowledgeable and dedicated. Their cutting-edge technology has helped us stay ahead in the competitive mining industry.",
      image: "path/to/john.jpg",
    },
    {
      name: "Emily Johnson",
      title: "Mining Engineer",
      message: "Working with Alice Mining has been a game-changer. Their solutions are not only effective but also easy to integrate into our existing systems.",
      image: "path/to/emily.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-700 mr-4"/>
                <div>
                  <p className="text-xl font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
