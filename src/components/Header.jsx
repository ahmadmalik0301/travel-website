import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import headerImage from '../assets/img/header-image.jpg';

const Header = () => {
  return (
    <header 
      className="header"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '95vh',
        position: 'relative'
      }}
    >
      <Navbar />
      <div className="header-content">
        <h1 className="lg-heading text-light main-heading">travel the world</h1>
        <p className="text-light">travel the world, experience the greateness, it's the best gift given by nature</p>
        <Link to="/about" className="btn btn-primary text-red md-heading">Explore Places</Link>
      </div>
    </header>
  );
};

export default Header;