import React from 'react';
import NavbarContact from '../components/NavbarContact';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import '../assets/css/style.css';

const Contact = () => {
  return (
    <div>
      <NavbarContact />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;