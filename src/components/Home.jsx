import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Testimonials from './Testimonials';

const Home = () => (
  <main id="home">
    <Banner />
    <About />
    <Services />
    <Testimonials />
    <Contact />
  </main>
);

export default Home;
