
import React, { useState } from 'react';
import "../LandingCss/Blogs.css"; 
import blog1 from '/src/assets/blog1.jpg';
import blog2 from '/src/assets/blog2.jpg';
import blog3 from '/src/assets/blog3.jpg';
import blog4 from '/src/assets/blog4.jpg';
import blog5 from '/src/assets/blog5.jpg';
import blog6 from '/src/assets/blog6.jpg';
import blog7 from '/src/assets/blog7.jpg';
import blog8 from '/src/assets/blog8.jpg';
import blog9 from '/src/assets/blog9.jpg';

const Blogs = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const cards = [
    { title: 'Eliminating Traffic Jams in India! by Nikhil Surya Mukhi', text: 'Some quick example text for card 1.', fullContent: 'Traffic jams in India are a significant challenge affecting millions...', link: '#', image: blog1 },
    { title: 'Parking Challenges in Office Area! by Sujeet Kumar', text: 'Some quick example text for card 2.', fullContent: 'Finding parking in busy office areas is increasingly becoming a daily struggle...', link: '#', image: blog2 },
    { title: 'NO Parking by Ishwar Kumar', text: 'Some quick example text for card 3.', fullContent: 'This article examines the proliferation of "No Parking" zones...', link: '#', image: blog3 },
    { title: 'An Easy Way to Earn Extra Income! by Sudhanshu Kumar', text: 'Some quick example text for card 4.', fullContent: 'Did you know your unused parking space could become a source of passive income?...', link: '#', image: blog4 },
    { title: 'Finding the Perfect Parking Spot! by Nitya Agrawal', text: 'Some quick example text for card 5.', fullContent: 'The hunt for the perfect parking spot can be stressful and time-consuming...', link: '#', image: blog5 },
    { title: 'Smart Parking Technology by Rohit Sharma', text: 'Some quick example text for card 6.', fullContent: 'This guide offers advanced strategies for locating ideal parking spots...', link: '#', image: blog6 },
    { title: 'Fastag Parking Payment Service by Anuj Singh', text: 'Some quick example text for card 7.', fullContent: 'The integration of Fastag technology into parking payment systems...', link: '#', image: blog7 },
    { title: 'Evolution in the Parking Industry by Anuj Singh', text: 'Some quick example text for card 8.', fullContent: 'The parking industry has undergone remarkable transformations...', link: '#', image: blog8 },
    { title: 'Electric Evolution of EV Charging by Anuj Singh', text: 'Some quick example text for card 9.', fullContent: 'The rise of electric vehicles has created new demands for integrated charging...', link: '#', image: blog9 },
  ];
  
  const toggleCardExpansion = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="parknblog-section">
      <div id="Blogsection" className="parknblog-grid-container">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={`parknblog-card ${expandedCards[index] ? 'parknblog-card-expanded' : ''}`}
          >
            {card.image ? (
              <img src={card.image} alt={`Image for ${card.title}`} className="parknblog-card-image" />
            ) : (
              <div className="parknblog-no-image">
                <p>Image not available</p>
              </div>
            )}
            <div className="parknblog-card-content">
              <h5 className="parknblog-card-title">{card.title}</h5>
              
              <div className="parknblog-card-text">
                {expandedCards[index] ? card.fullContent : card.text}
              </div>
              
              <button 
                onClick={() => toggleCardExpansion(index)} 
                className="parknblog-card-button"
              >
                {expandedCards[index] ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
