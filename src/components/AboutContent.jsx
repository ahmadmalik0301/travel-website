import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent = () => {
  const leftList = [
    "Lorem ipsum dolor sit.",
    "Lorem ipsum dolor sit.",
    "Lorem ipsum dolor sit."
  ];
  
  const rightList = [
    "Lorem ipsum dolor sit.",
    "Lorem ipsum dolor sit.",
    "Lorem ipsum dolor sit."
  ];

  const counts = [
    { number: "2500", label: "Travelled" },
    { number: "500", label: "Places" },
    { number: "400", label: "Guide" },
    { number: "20", label: "Sport" }
  ];

  return (
    <section className="about">
      <div className="container">
        <h2 className="lg-heading text-black about-heading">About Us</h2>
        <p className="text-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur, eum veritatis minima tempore laborum ad aspernatur quod itaque. Nostrum.</p>
        
        <div className="about-wrapper">
          <div className="left">
            <ul>
              {leftList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="right">
            <ul>
              {rightList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="counts">
          {counts.map((count, index) => (
            <div key={index} className={`count-item count-item${index + 1}`}>
              <span>{count.number}</span>
              <p>{count.label}</p>
            </div>
          ))}
        </div>

        <div className="cta-banner">
          <div className="cta-banner-left">
            <p className="cta-line">What are you waiting for, reach us right now.</p>
          </div>
          <div className="cta-banner-right">
            <Link to="/contact" className="btn-cta">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;