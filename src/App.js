import React, { useRef } from 'react';
import './App.css';
import HomePage from './HomePage';
import Navbar from './Navbar';
import Services from './Services';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <Navbar 
        scrollToSection={scrollToSection} 
        refs={{ homeRef, servicesRef, skillsRef, contactRef }} 
      />
      <div ref={homeRef}>
        <HomePage />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
