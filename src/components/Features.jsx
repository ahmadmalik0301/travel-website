import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "fas fa-route fa-2x text-red",
      title: "Adventure",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis Dolores ipsa a veniam molestias beatae, fuga ex laboriosam."
    },
    {
      icon: "fas fa-strikethrough fa-2x",
      title: "Less Price",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam."
    },
    {
      icon: "fas fa-user-check fa-2x text-red",
      title: "Experice",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam."
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="box-wrapper">
          {features.map((feature, index) => (
            <div key={index} className={`box box-${index + 1}`}>
              <i className={feature.icon}></i>
              <h2 className="md-heading">{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;