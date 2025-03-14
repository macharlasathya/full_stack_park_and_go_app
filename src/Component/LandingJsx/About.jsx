


// import React, { useState } from "react";
// import '../../Component/LandingCss/About.css';

// const About = () => {
//   const [selectedCard, setSelectedCard] = useState(null);

//   const handleCardClick = (index) => {
//     setSelectedCard(index);
//   };

//   const cardData = [
//     { title: "Save Money", text: "Save up to 20% on our site compared to the cost of other parking platforms.", class: "unique-text-primary" },
//     { title: "Save Time", text: "It's easy to compare parking spots. Booking a reservation is quick and simple.", class: "unique-text-secondary" },
//     { title: "Save Stress", text: "Guarantee your parking spot by booking in advance. Can't make it? Cancellations are free.", class: "unique-text-success" },
//     { title: "Safety & Security", text: "Don't worry, we got you covered. Choose safety features like CCTV, security guards, etc.", class: "unique-text-danger" },
//   ];

//   return (
//     <div className="unique-containers">
//       <div className="unique-card-container">
//         {cardData.map((card, index) => (
//           <div
//             key={index}
//             className={`custom-unique-card ${selectedCard === index ? "unique-highlight" : ""}`}
//             onClick={() => handleCardClick(index)}
//           >
//             <div className={`unique-card-body ${card.class}`}>
//               <h5 className="unique-card-title unique-bold-text">{card.title}</h5>
//               <p className="unique-card-text">{card.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;


import React, { useState } from "react";
import "../LandingCss/About.css"; // Make sure path is correct

const About = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  
  const handleCardClick = (index) => {
    setSelectedCard(index);
  };
  
  const cardData = [
    { title: "Save Money", text: "Save up to 20% on our site compared to the cost of other parking platforms.", class: "about-text-primary" },
    { title: "Save Time", text: "It's easy to compare parking spots. Booking a reservation is quick and simple.", class: "about-text-secondary" },
    { title: "Save Stress", text: "Guarantee your parking spot by booking in advance. Can't make it? Cancellations are free.", class: "about-text-success" },
    { title: "Safety & Security", text: "Don't worry, we got you covered. Choose safety features like CCTV, security guards, etc.", class: "about-text-danger" },
  ];
  
  return (
    <div className="about-page-container">
      <div className="about-card-wrapper">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`about-card ${selectedCard === index ? "about-card-highlight" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div className={`about-card-body ${card.class}`}>
              <h5 className="about-card-title about-bold-text">{card.title}</h5>
              <p className="about-card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;