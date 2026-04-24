import React from 'react';
import companyImg from '../assets/img/company-img.jpg';

const ContactForm = () => {
  const addressInfo = [
    { icon: "fas fa-map-marker-alt fa-3x text-red", title: "Location", text: "#2661 Janakpuri Colony, city name, town name" },
    { icon: "far fa-envelope fa-3x text-red", title: "Email", text: "harshitvashisth@mycompany.com" },
    { icon: "fas fa-phone-square-alt fa-3x text-red", title: "Call", text: "+910101010101" }
  ];

  return (
    <section className="contact-form">
      <div className="container">
        <div className="form-wrapper">
          <div className="company-address">
            {addressInfo.map((info, index) => (
              <div key={index} className="address-group">
                <i className={info.icon}></i>
                <h2 className="text-gray md-heading">{info.title}</h2>
                <p>{info.text}</p>
              </div>
            ))}
            <img src={companyImg} alt="Company" />
          </div>
          <form className="form">
            <h1 className="lg-heading text-black">Contact Us</h1>
            <p className="text-gray">Let us know your questions, suggestions and concerns by filling out the contact form below.</p>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message"></textarea>
            </div>
            <button type="submit" className="form-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;