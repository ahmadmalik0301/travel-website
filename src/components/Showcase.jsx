import React from 'react';
import { Link } from 'react-router-dom';
import showcase3 from '../assets/img/showcase-photo3.jpg';
import showcase1 from '../assets/img/showcase-photo1.jpg';

const Showcase = () => {
  const destinations = [
    {
      id: 1,
      image: showcase3,
      title: "DEGANVY, U.K",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit incidunt nulla a corporis eveniet pariatur maiores, id quis, totam dolore praesentium facere consequatur rem, fuga minus! Rerum, dolorem praesentium. Nemo?",
    },
    {
      id: 2,
      image: showcase1,
      title: "DESERT, EGYPT",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet ratione, quas laborum porro, explicabo vero ipsum laudantium nesciunt eos illum pariatur obcaecati fugiat asperiores nulla adipisci. Porro, atque itaque.",
    }
  ];

  return (
    <section className="showcase">
      <div className="container">
        {destinations.map((dest, index) => (
          <div key={dest.id} className={`row row${index + 1}`}>
            <div className="img-box">
              <img src={dest.image} alt="Description" />
            </div>
            <div className="text-box">
              <h2 className="lg-heading text-black">{dest.title}</h2>
              <p className="text-gray">{dest.description}</p>
              <Link to="/about" className="btn btn-secondary">More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;