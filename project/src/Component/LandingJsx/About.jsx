


// import React, { useState } from "react";
// import "../LandingCss/About.css"; // Make sure path is correct

// const About = () => {
//   const [selectedCard, setSelectedCard] = useState(null);
  
//   const handleCardClick = (index) => {
//     setSelectedCard(index);
//   };
  
//   const cardData = [
//     { title: "Save Money", text: "Save up to 20% on our site compared to the cost of other parking platforms.", class: "about-text-primary" },
//     { title: "Save Time", text: "It's easy to compare parking spots. Booking a reservation is quick and simple.", class: "about-text-secondary" },
//     { title: "Save Stress", text: "Guarantee your parking spot by booking in advance. Can't make it? Cancellations are free.", class: "about-text-success" },
//     { title: "Safety & Security", text: "Don't worry, we got you covered. Choose safety features like CCTV, security guards, etc.", class: "about-text-danger" },
//   ];
  
//   return (
//     <div className="about-page-container">
//       <div className="about-card-wrapper">
//         {cardData.map((card, index) => (
//           <div
//             key={index}
//             className={`about-card ${selectedCard === index ? "about-card-highlight" : ""}`}
//             onClick={() => handleCardClick(index)}
//           >
//             <div className={`about-card-body ${card.class}`}>
//               <h5 className="about-card-title about-bold-text">{card.title}</h5>
//               <p className="about-card-text">{card.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useState } from 'react';
import "../LandingCss/About.css"; 

const About = () => {
  const [activeCard, setActiveCard] = useState(null);
  
  const features = [
    {
      id: 1,
      title: "Easy Parking",
      description: "Find and reserve parking spots with just a few taps. No more circling blocks looking for space.",
      theme: "abt-theme-blue"
    },
    {
      id: 2,
      title: "Secure Payment",
      description: "Integrated payment system with multiple options. Pay securely through our platform with no hidden fees.",
      theme: "abt-theme-gray"
    },
    {
      id: 3,
      title: "Cost Savings",
      description: "Save up to 30% compared to drive-up rates. Special discounts for regular users and long-term parking.",
      theme: "abt-theme-green"
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Our customer service team is available round the clock to help you with any issues or questions.",
      theme: "abt-theme-red"
    }
  ];
  
  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };
  
  return (
    <section className="abt-section-container">
      <div className="abt-card-grid">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`abt-feature-card ${feature.theme} ${activeCard === feature.id ? 'abt-feature-card-active' : ''}`}
            onClick={() => handleCardClick(feature.id)}
          >
            <div className="abt-card-content">
              <h3 className="abt-card-heading">{feature.title}</h3>
              <p className="abt-card-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
