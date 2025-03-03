import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import "../../Component/LandingCss/FAQ.css";

const AccordionComponent = ({ title }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const accordionData = [
        { title: 'What is ParkSpot?', content: 'ParkSpot is a convenient app to find and book parking spaces.' },
        { title: 'Why do I need to add my vehicle number at the time of booking? Is it safe?', content: 'Providing your vehicle number helps ensure the correct parking space is allocated to you. Your data is kept secure.' },
        { title: 'How can your platform help me? How safe is your platform?', content: 'Our platform offers secure and verified parking spaces, ensuring both convenience and safety.' },
        { title: 'Does ParkSpot support cashless and no-contact bookings?', content: 'Yes, ParkSpot offers fully cashless and contactless bookings for ease and safety.' },
        { title: 'How can I rent my empty parking space?', content: 'Currently, ParkSpot is only for parking space users, not for renting out spaces.' }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id="FAQsection" className="accordion-container">
            <h2 className="accordion-title">{title}</h2>
            
            <div className="accordion-wrapper">
                {accordionData.map((item, index) => (
                    <div key={index} className="accordion-item">
                        <button
                            className="accordion-header"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span>{item.title}</span>
                            <i
                                className={`icon bi ${activeIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'}`}
                            ></i>
                        </button>
                        <div className={`accordion-body ${activeIndex === index ? 'active' : ''}`}>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccordionComponent;





