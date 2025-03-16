


import React from "react";
import "../LandingCss/Feature.css";

const featureItems = [
  {
    title: "Navigation",
    text: "It is very difficult to go to an unknown place. People usually search on Google Maps to reach a particular location but sometimes it happens that people don't get the exact address from the map. It is easy to find places like malls, hospitals, and much more popular sites, but when it comes to finding a specific location like a house, it's really hard."
  },
  {
    title: "Booking",
    text: "Who doesn't want to reserve a spot? It is easy to park vehicles beside the roadside but everyone knows what might be the consequences. The usual consequences will be that the user's vehicle might get towed away. Just like people going to Movie Theatres after booking a ticket, users can also book their car parking space by using our platform."
  },
  {
    title: "Searching",
    text: "People love their cars and hence they would want to keep their vehicles in a safe and secure parking area. They would want a parking area where there will be security guards, CCTV cameras, etc. ParkSpot provides a genuine and authentic parking space for its users so that no mishappening will be done to the user's property."
  },
  {
    title: "Safety & Security",
    text: "People go to places like shopping malls, hospitals, and many local areas with their cars, without thinking that there may not be available car parking spaces. Maps can help you search popular sites but ParkSpot along with search provides additional information like current availability, rates, distance, etc."
  }
];

const Feature = () => {
  return (
    <div id="featuressection" className="parkspot-features">
      <div className="parkspot-features-container">
        <div className="parkspot-features-grid">
          {featureItems.map((item, index) => (
            <div className="parkspot-feature-item" key={index}>
              <div className="parkspot-feature-card">
                <div className="parkspot-feature-icon">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <h3 className="parkspot-feature-title">{item.title}</h3>
                <p className="parkspot-feature-desc">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;