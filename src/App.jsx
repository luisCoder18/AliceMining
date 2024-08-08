import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Services />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
