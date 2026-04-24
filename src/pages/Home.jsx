import React from 'react';
import Header from '../components/Header';
import Showcase from '../components/Showcase';
import Features from '../components/Features';
import Footer from '../components/Footer';
import '../assets/css/style.css';

const Home = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;