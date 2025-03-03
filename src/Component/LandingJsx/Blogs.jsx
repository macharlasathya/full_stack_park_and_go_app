
import React from 'react';
import "../../Component/LandingCss/Blogs.css";
import blog1 from '/src/assets/blog1.jpg';
import blog2 from '/src/assets/blog2.jpg';
import blog3 from '/src/assets/blog3.jpg';
import blog4 from '/src/assets/blog4.jpg';
import blog5 from '/src/assets/blog5.jpg';
import blog6 from '/src/assets/blog6.jpg';
import blog7 from '/src/assets/blog7.jpg';
import blog8 from '/src/assets/blog8.jpg';
import blog9 from '/src/assets/blog9.jpg';

const CardGrid = () => {
  const cards = [
    { title: 'Eliminating Traffic Jams in India! by Nikhil Surya Mukhi', text: 'Some quick example text for card 1.', link: '#', image: blog1 },
    { title: 'Parking Challenges in Office Area! by Sujeet Kumar', text: 'Some quick example text for card 2.', link: '#', image: blog2 },
    { title: 'NO Parking by Ishwar Kumar', text: 'Some quick example text for card 3.', link: '#', image: blog3 },
    { title: 'An Easy Way to Earn Extra Income! by Sudhanshu Kumar', text: 'Some quick example text for card 4.', link: '#', image: blog4 },
    { title: 'Finding the Perfect Parking Spot! by Nitya Agrawal', text: 'Some quick example text for card 5.', link: '#', image: blog5 },
    { title: 'Finding the Perfect Parking Spot! by Nitya Agrawal', text: 'Some quick example text for card 6.', link: '#', image: blog6 },
    { title: 'Fastag Parking Payment Service by Anuj Singh', text: 'Some quick example text for card 7.', link: '#', image: blog7 },
    { title: 'Evolution in the Parking Industry by Anuj Singh', text: 'Some quick example text for card 8.', link: '#', image: blog8 },
    { title: 'Electric Evolution of EV Charging by Anuj Singh', text: 'Some quick example text for card 9.', link: '#', image: blog9 },
  ];

  return (
    <div id="Blogsection" className="card-grid-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          {card.image ? (
            <img src={card.image} alt={`Image for ${card.title}`} className="card-image" />
          ) : (
            <div className="no-image">
              <p>Image not available</p>
            </div>
          )}
          <div className="card-content">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
            <a href={card.link} className="card-button">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;


