import React from 'react';
import NavbarAbout from '../components/NavbarAbout';
import AboutContent from '../components/AboutContent';
import '../assets/css/style.css';

const About = () => {
  return (
    <div>
      <NavbarAbout />
      <AboutContent />
    </div>
  );
};

export default About;