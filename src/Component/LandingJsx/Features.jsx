import React from "react";
import "../../Component/LandingCss/Feature.css";

const cardsData = [
  {
    title: "Navigation",
    text: "It is very difficult to go to an unknown place. People usually search on Google Maps to reach a particular location but sometimes it happens that people don’t get the exact address from the map. It is easy to find places like malls, hospitals, and much more popular sites, but when it comes to finding a specific location like a house, it’s really hard.It is very difficult to go to an unknown place.It is very difficult to go to an unknown place"
  },
  {
    title: "Booking",
    text: "Who doesn’t want to reserve a spot? It is easy to park vehicles beside the roadside but everyone knows what might be the consequences. The usual consequences will be that the user’s vehicle might get towed away. Just like people going to Movie Theatres after booking a ticket so that they don’t need to worry about the availability of tickets after going to the Theatre, users can also book their car parking space by using our platform and will be  ."
  },
  {
    title: "Searching",
    text: "People love their cars and hence they would want to keep their vehicles in a safe and secure parking area. They would want a parking area where there will be security guards, CCTV cameras, etc. ParkSpot provides a genuine and authentic parking space for its users so that no mishappening will be done to the user’s property. ParkSpot provides security to private property as well so that users don’t need to worry about the place where they are keeping their vehicles."
  },
  {
    title: "Safety & Security",
    text: "People go to places like shopping malls, hospitals, and many local areas with their cars, without thinking that there may not be available car parking spaces. Maps can help you search popular sites but ParkSpot along with search provides additional information like current availability, rates, distance, etc. ParkSpot also helps users to search apartment parking areasIt is very difficult to go to an unknown place.It is very difficult to go to an unknown place."
  }
];

const FeatureCards = () => {
  return (
    <div  id="featuressection" className="container">
      <div className="row">
        {cardsData.map((cardses, index) => (
          <div className="col-md-6" key={index}>
            <div className="card p-4 shadow-lg rounded-2xl">
              <div className="icon-container text-green-500 mb-2">
                <i className="bi bi-check-circle-fill text-3xl"></i>
              </div>
              <h5 className="card-title text-xl font-semibold mb-2">{cardses.title}</h5>
              <p className="card-text text-base text-gray-600">{cardses.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;

