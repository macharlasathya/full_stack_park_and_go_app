
      
// import React, { useState, useEffect } from "react";
// import { useSearchParams, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./ParkingBooking.css";
// import Hytech from '/src/assets/Hytech.jpg';
// import ktp from '/src/assets/ktp.jpg';
// import Mdp from '/src/assets/Mdp.jpg';
// import gcb from '/src/assets/gcb.jpg';
// import bgp from '/src/assets/bgp.jpg';
// import jubilee from '/src/assets/jubli.jpg';
// import ameerpet from '/src/assets/ameerpet.jpg';
// import kondapur from '/src/assets/kondapur.jpg';
// import miyapur from '/src/assets/miyapur.jpg';
// import secunderabad from '/src/assets/secundarbad.jpg';

// const ParkingBooking = () => {
//   const [searchParams] = useSearchParams();
//   const searchLocation = searchParams.get("location");
//   const lat = searchParams.get("lat");
//   const lng = searchParams.get("lng");
  
//   const [isLoading, setIsLoading] = useState(true);
//   const [locations, setLocations] = useState([]);

//   // Sample parking locations data
//   const parkingLocations = [
//     {
//       id: 1,
//       name: "Gachibowli Parking Complex",
//       location: "Gachibowli",
//       address: "123 Main Street, Gachibowli, Hyderabad",
//       availableSpots: 15,
//       price: "₹20/hour",
//       distance: "0.5 km",
//       rating: 4.5,
//       image: gcb
//     },
//     {
//       id: 2,
//       name: "Hitech City Parking Zone",
//       location: "Hitech City",
//       address: "456 Park Avenue, Hitech City, Hyderabad",
//       availableSpots: 8,
//       price: "₹30/hour",
//       distance: "1.2 km",
//       rating: 4.2,
//       image: Hytech
//     },
//     {
//       id: 3,
//       name: "Madhapur Public Parking",
//       location: "Madhapur",
//       address: "789 Center Road, Madhapur, Hyderabad",
//       availableSpots: 22,
//       price: "₹25/hour",
//       distance: "0.8 km",
//       rating: 4.0,
//       image: Mdp
//     },
//     {
//       id: 4,
//       name: "Kukatpally Parking Hub",
//       location: "Kukatpally",
//       address: "101 Station Street, Kukatpally, Hyderabad",
//       availableSpots: 12,
//       price: "₹18/hour",
//       distance: "1.5 km",
//       rating: 4.3,
//       image: ktp
//     },
//     {
//       id: 5,
//       name: "Begumpet Secure Parking",
//       location: "Begumpet",
//       address: "202 Market Lane, Begumpet, Hyderabad",
//       availableSpots: 5,
//       price: "₹22/hour",
//       distance: "0.9 km",
//       rating: 4.1,
//       image: bgp
//     },
//     // New Added Locations
//     {
//       id: 6,
//       name: "Jubilee Hills Premium Parking",
//       location: "Jubilee Hills",
//       address: "510 Film Nagar Road, Jubilee Hills, Hyderabad",
//       availableSpots: 18,
//       price: "₹35/hour",
//       distance: "1.1 km",
//       rating: 4.7,
//       image: jubilee
//     },
//     {
//       id: 7,
//       name: "Ameerpet Metro Parking",
//       location: "Ameerpet",
//       address: "72 Metro Station Complex, Ameerpet, Hyderabad",
//       availableSpots: 25,
//       price: "₹15/hour",
//       distance: "0.3 km",
//       rating: 4.4,
//       image: ameerpet
//     },
//     {
//       id: 8,
//       name: "Kondapur Central Parking",
//       location: "Kondapur",
//       address: "308 Financial District Road, Kondapur, Hyderabad",
//       availableSpots: 10,
//       price: "₹25/hour",
//       distance: "0.7 km",
//       rating: 4.2,
//       image: kondapur
//     },
//     {
//       id: 9,
//       name: "Miyapur Park & Ride",
//       location: "Miyapur",
//       address: "15 Metro Junction, Miyapur, Hyderabad",
//       availableSpots: 30,
//       price: "₹12/hour",
//       distance: "0.2 km",
//       rating: 3.9,
//       image: miyapur
//     },
//     {
//       id: 10,
//       name: "Secunderabad Railway Parking",
//       location: "Secunderabad",
//       address: "85 Railway Station Road, Secunderabad, Hyderabad",
//       availableSpots: 40,
//       price: "₹18/hour",
//       distance: "0.4 km",
//       rating: 4.0,
//       image: secunderabad
//     },
//   ];

//   useEffect(() => {
//     // Simulate loading data
//     setIsLoading(true);
    
//     // Simulate API call with a delay
//     setTimeout(() => {
//       let filteredResults = [];
      
//       if (searchLocation) {
//         // Improved search logic to be more forgiving with partial matches
//         const searchTermLower = searchLocation.toLowerCase();
//         filteredResults = parkingLocations.filter(
//           (location) => {
//             return (
//               location.location.toLowerCase().includes(searchTermLower) ||
//               location.address.toLowerCase().includes(searchTermLower) ||
//               location.name.toLowerCase().includes(searchTermLower) ||
//               // Check if the search term is a partial match for "Hyderabad" since all locations are in Hyderabad
//               "hyderabad".includes(searchTermLower)
//             );
//           }
//         );
        
//         // If no results found, return all locations as a fallback (for demo purposes)
//         if (filteredResults.length === 0) {
//           console.log("No exact matches found, showing all locations");
//           filteredResults = parkingLocations;
//         }
//       } else if (lat && lng) {
//         // In a real app, you would calculate proximity based on coordinates
//         // For demo, just return all locations
//         filteredResults = parkingLocations;
//         console.log(`Using coordinates: ${lat}, ${lng}`);
//       } else {
//         // If no search criteria provided, show all locations
//         filteredResults = parkingLocations;
//       }
      
//       setLocations(filteredResults);
//       setIsLoading(false);
//     }, 1000); // Simulate loading delay
    
//   }, [searchLocation, lat, lng]);

//   return (
//     <div className="parking-results-page">
//       <div className="container py-5">
//         <div className="parking-results-header mb-4">
//           <h2 className="parking-results-title">
//             {searchLocation 
//               ? `Parking Spots near "${searchLocation}"` 
//               : "Parking Spots near you"}
//           </h2>
//           <p>
//             <Link to="/" className="btn btn-outline-primary btn-sm">
//               <i className="bi bi-arrow-left me-2"></i>
//               New Search
//             </Link>
//           </p>
//         </div>

//         {isLoading ? (
//           <div className="text-center py-5">
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <p className="mt-3">Finding parking spots...</p>
//           </div>
//         ) : locations.length > 0 ? (
//           <div className="row">
//             {locations.map((location) => (
//               <div className="col-md-6 col-lg-4 mb-4" key={location.id}>
//                 <div className="parking-spot-card">
//                   <div className="parking-spot-image">
//                     <img src={location.image} alt={location.name} className="img-fluid" />
//                     <span className="parking-price-tag">{location.price}</span>
//                   </div>
//                   <div className="card-body p-3">
//                     <h4 className="parking-spot-title">{location.name}</h4>
//                     <p className="parking-spot-address">
//                       <i className="bi bi-geo-alt-fill text-primary me-2"></i>
//                       {location.address}
//                     </p>
                    
//                     <div className="d-flex justify-content-between align-items-center mt-3">
//                       <div>
//                         <span className="badge bg-success me-2">
//                           <i className="bi bi-p-circle-fill me-1"></i>
//                           {location.availableSpots} spots
//                         </span>
//                         <span className="text-muted">
//                           <i className="bi bi-compass me-1"></i>
//                           {location.distance}
//                         </span>
//                       </div>
//                       <div className="parking-spot-rating">
//                         <i className="bi bi-star-fill text-warning"></i>
//                         <span className="ms-1">{location.rating}</span>
//                       </div>
//                     </div>
                    
//                     <div className="mt-3">
//                       <Link 
//                         to={`/CustomerDetails/${location.id}`} 
//                         className="btn btn-primary w-100"
//                       >
//                         Book Now
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="parking-no-results text-center py-5">
//             <i className="bi bi-emoji-frown display-1 text-muted"></i>
//             <h3 className="mt-3">No parking spots found</h3>
//             <p>Try searching for a different location</p>
//             <Link to="/" className="btn btn-primary mt-3">
//               Back to Search
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ParkingBooking;

// import React, { useState, useEffect } from "react";
// import { useSearchParams, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./ParkingBooking.css";
// import Hytech from '/src/assets/Hytech.jpg';
// import ktp from '/src/assets/ktp.jpg';
// import Mdp from '/src/assets/Mdp.jpg';
// import gcb from '/src/assets/gcb.jpg';
// import bgp from '/src/assets/bgp.jpg';
// import jubilee from '/src/assets/jubli.jpg';
// import ameerpet from '/src/assets/ameerpet.jpg';
// import kondapur from '/src/assets/kondapur.jpg';
// import miyapur from '/src/assets/miyapur.jpg';
// import secunderabad from '/src/assets/secundarbad.jpg';

// const ParkingBooking = () => {
//   const [searchParams] = useSearchParams();
//   const searchLocation = searchParams.get("location");
//   const lat = searchParams.get("lat");
//   const lng = searchParams.get("lng");
  
//   const [isLoading, setIsLoading] = useState(true);
//   const [locations, setLocations] = useState([]);

//   // Sample parking locations data
//   const parkingLocations = [
//     {
//       id: 1,
//       name: "Gachibowli Parking Complex",
//       location: "Gachibowli",
//       address: "123 Main Street, Gachibowli, Hyderabad",
//       availableSpots: 15,
//       price: "₹20/hour",
//       distance: "0.5 km",
//       rating: 4.5,
//       image: gcb,
//       latitude: 17.4438,
//       longitude: 78.3772
//     },
//     {
//       id: 2,
//       name: "Hitech City Parking Zone",
//       location: "Hitech City",
//       address: "456 Park Avenue, Hitech City, Hyderabad",
//       availableSpots: 8,
//       price: "₹30/hour",
//       distance: "1.2 km",
//       rating: 4.2,
//       image: Hytech,
//       latitude: 17.4435,
//       longitude: 78.3772
//     },
//     {
//       id: 3,
//       name: "Madhapur Public Parking",
//       location: "Madhapur",
//       address: "789 Center Road, Madhapur, Hyderabad",
//       availableSpots: 22,
//       price: "₹25/hour",
//       distance: "0.8 km",
//       rating: 4.0,
//       image: Mdp,
//       latitude: 17.4482,
//       longitude: 78.3941
//     },
//     {
//       id: 4,
//       name: "Kukatpally Parking Hub",
//       location: "Kukatpally",
//       address: "101 Station Street, Kukatpally, Hyderabad",
//       availableSpots: 12,
//       price: "₹18/hour",
//       distance: "1.5 km",
//       rating: 4.3,
//       image: ktp,
//       latitude: 17.4849,
//       longitude: 78.4138
//     },
//     {
//       id: 5,
//       name: "Begumpet Secure Parking",
//       location: "Begumpet",
//       address: "202 Market Lane, Begumpet, Hyderabad",
//       availableSpots: 5,
//       price: "₹22/hour",
//       distance: "0.9 km",
//       rating: 4.1,
//       image: bgp,
//       latitude: 17.4400,
//       longitude: 78.4690
//     },
//     // New Added Locations
//     {
//       id: 6,
//       name: "Jubilee Hills Premium Parking",
//       location: "Jubilee Hills",
//       address: "510 Film Nagar Road, Jubilee Hills, Hyderabad",
//       availableSpots: 18,
//       price: "₹35/hour",
//       distance: "1.1 km",
//       rating: 4.7,
//       image: jubilee,
//       latitude: 17.4271,
//       longitude: 78.4075
//     },
//     {
//       id: 7,
//       name: "Ameerpet Metro Parking",
//       location: "Ameerpet",
//       address: "72 Metro Station Complex, Ameerpet, Hyderabad",
//       availableSpots: 25,
//       price: "₹15/hour",
//       distance: "0.3 km",
//       rating: 4.4,
//       image: ameerpet,
//       latitude: 17.4374,
//       longitude: 78.4487
//     },
//     {
//       id: 8,
//       name: "Kondapur Central Parking",
//       location: "Kondapur",
//       address: "308 Financial District Road, Kondapur, Hyderabad",
//       availableSpots: 10,
//       price: "₹25/hour",
//       distance: "0.7 km",
//       rating: 4.2,
//       image: kondapur,
//       latitude: 17.4611,
//       longitude: 78.3604
//     },
//     {
//       id: 9,
//       name: "Miyapur Park & Ride",
//       location: "Miyapur",
//       address: "15 Metro Junction, Miyapur, Hyderabad",
//       availableSpots: 30,
//       price: "₹12/hour",
//       distance: "0.2 km",
//       rating: 3.9,
//       image: miyapur,
//       latitude: 17.4950,
//       longitude: 78.3688
//     },
//     {
//       id: 10,
//       name: "Secunderabad Railway Parking",
//       location: "Secunderabad",
//       address: "85 Railway Station Road, Secunderabad, Hyderabad",
//       availableSpots: 40,
//       price: "₹18/hour",
//       distance: "0.4 km",
//       rating: 4.0,
//       image: secunderabad,
//       latitude: 17.4341,
//       longitude: 78.5029
//     },
//   ];

//   useEffect(() => {
//     // Simulate loading data
//     setIsLoading(true);
    
//     // Simulate API call with a delay
//     setTimeout(() => {
//       let filteredResults = [];
      
//       if (searchLocation) {
//         // Improved search logic to be more forgiving with partial matches
//         const searchTermLower = searchLocation.toLowerCase();
//         filteredResults = parkingLocations.filter(
//           (location) => {
//             return (
//               location.location.toLowerCase().includes(searchTermLower) ||
//               location.address.toLowerCase().includes(searchTermLower) ||
//               location.name.toLowerCase().includes(searchTermLower) ||
//               // Check if the search term is a partial match for "Hyderabad" since all locations are in Hyderabad
//               "hyderabad".includes(searchTermLower)
//             );
//           }
//         );
        
//         // If no results found, return all locations as a fallback (for demo purposes)
//         if (filteredResults.length === 0) {
//           console.log("No exact matches found, showing all locations");
//           filteredResults = parkingLocations;
//         }
//       } else if (lat && lng) {
//         // In a real app, you would calculate proximity based on coordinates
//         // For demo, just return all locations
//         filteredResults = parkingLocations;
//         console.log(`Using coordinates: ${lat}, ${lng}`);
//       } else {
//         // If no search criteria provided, show all locations
//         filteredResults = parkingLocations;
//       }
      
//       setLocations(filteredResults);
//       setIsLoading(false);
//     }, 1000); // Simulate loading delay
    
//   }, [searchLocation, lat, lng]);

//   return (
//     <div className="parking-results-page">
//       <div className="container py-5">
//         <div className="parking-results-header mb-4">
//           <h2 className="parking-results-title">
//             {searchLocation 
//               ? `Parking Spots near "${searchLocation}"` 
//               : "Parking Spots near you"}
//           </h2>
//           <p>
//             <Link to="/" className="btn btn-outline-primary btn-sm">
//               <i className="bi bi-arrow-left me-2"></i>
//               New Search
//             </Link>
//           </p>
//         </div>

//         {isLoading ? (
//           <div className="text-center py-5">
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <p className="mt-3">Finding parking spots...</p>
//           </div>
//         ) : locations.length > 0 ? (
//           <div className="row">
//             {locations.map((location) => (
//               <div className="col-md-6 col-lg-4 mb-4" key={location.id}>
//                 <div className="parking-spot-card">
//                   <div className="parking-spot-image">
//                     <img src={location.image} alt={location.name} className="img-fluid" />
//                     <span className="parking-price-tag">{location.price}</span>
//                   </div>
//                   <div className="card-body p-3">
//                     <h4 className="parking-spot-title">{location.name}</h4>
//                     <p className="parking-spot-address">
//                       <i className="bi bi-geo-alt-fill text-primary me-2"></i>
//                       {location.address}
//                     </p>
                    
//                     <div className="d-flex justify-content-between align-items-center mt-3">
//                       <div>
//                         <span className="badge bg-success me-2">
//                           <i className="bi bi-p-circle-fill me-1"></i>
//                           {location.availableSpots} spots
//                         </span>
//                         <span className="text-muted">
//                           <i className="bi bi-compass me-1"></i>
//                           {location.distance}
//                         </span>
//                       </div>
//                       <div className="parking-spot-rating">
//                         <i className="bi bi-star-fill text-warning"></i>
//                         <span className="ms-1">{location.rating}</span>
//                       </div>
//                     </div>
                    
//                     <div className="mt-3">
//                       <Link 
//                         to={`/CustomerDetails/${location.id}?lat=${location.latitude || ''}&lng=${location.longitude || ''}&locationName=${encodeURIComponent(location.name)}&address=${encodeURIComponent(location.address)}&price=${encodeURIComponent(location.price)}`} 
//                         className="btn btn-primary w-100"
//                       >
//                         Book Now
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="parking-no-results text-center py-5">
//             <i className="bi bi-emoji-frown display-1 text-muted"></i>
//             <h3 className="mt-3">No parking spots found</h3>
//             <p>Try searching for a different location</p>
//             <Link to="/" className="btn btn-primary mt-3">
//               Back to Search
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ParkingBooking;

import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ParkingBooking.css";
import Hytech from '/src/assets/Hytech.jpg';
import ktp from '/src/assets/ktp.jpg';
import Mdp from '/src/assets/Mdp.jpg';
import gcb from '/src/assets/gcb.jpg';
import bgp from '/src/assets/bgp.jpg';
import jubilee from '/src/assets/jubli.jpg';
import ameerpet from '/src/assets/ameerpet.jpg';
import kondapur from '/src/assets/kondapur.jpg';
import miyapur from '/src/assets/miyapur.jpg';
import secunderabad from '/src/assets/secundarbad.jpg';

const ParkingBooking = () => {
  const [searchParams] = useSearchParams();
  const searchLocation = searchParams.get("location");
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  
  const [isLoading, setIsLoading] = useState(true);
  const [locations, setLocations] = useState([]);

  // Sample parking locations data
  const parkingLocations = [
    {
      id: 1,
      name: "Gachibowli Parking Complex",
      location: "Gachibowli",
      address: "123 Main Street, Gachibowli, Hyderabad",
      availableSpots: 15,
      price: "₹20/hour",
      distance: "0.5 km",
      rating: 4.5,
      image: gcb,
      latitude: 17.4438,
      longitude: 78.3772
    },
    {
      id: 2,
      name: "Hitech City Parking Zone",
      location: "Hitech City",
      address: "456 Park Avenue, Hitech City, Hyderabad",
      availableSpots: 8,
      price: "₹30/hour",
      distance: "1.2 km",
      rating: 4.2,
      image: Hytech,
      latitude: 17.4435,
      longitude: 78.3772
    },
    {
      id: 3,
      name: "Madhapur Public Parking",
      location: "Madhapur",
      address: "789 Center Road, Madhapur, Hyderabad",
      availableSpots: 22,
      price: "₹25/hour",
      distance: "0.8 km",
      rating: 4.0,
      image: Mdp,
      latitude: 17.4482,
      longitude: 78.3941
    },
    {
      id: 4,
      name: "Kukatpally Parking Hub",
      location: "Kukatpally",
      address: "101 Station Street, Kukatpally, Hyderabad",
      availableSpots: 12,
      price: "₹18/hour",
      distance: "1.5 km",
      rating: 4.3,
      image: ktp,
      latitude: 17.4849,
      longitude: 78.4138
    },
    {
      id: 5,
      name: "Begumpet Secure Parking",
      location: "Begumpet",
      address: "202 Market Lane, Begumpet, Hyderabad",
      availableSpots: 5,
      price: "₹22/hour",
      distance: "0.9 km",
      rating: 4.1,
      image: bgp,
      latitude: 17.4400,
      longitude: 78.4690
    },
    // New Added Locations
    {
      id: 6,
      name: "Jubilee Hills Premium Parking",
      location: "Jubilee Hills",
      address: "510 Film Nagar Road, Jubilee Hills, Hyderabad",
      availableSpots: 18,
      price: "₹35/hour",
      distance: "1.1 km",
      rating: 4.7,
      image: jubilee,
      latitude: 17.4271,
      longitude: 78.4075
    },
    {
      id: 7,
      name: "Ameerpet Metro Parking",
      location: "Ameerpet",
      address: "72 Metro Station Complex, Ameerpet, Hyderabad",
      availableSpots: 25,
      price: "₹15/hour",
      distance: "0.3 km",
      rating: 4.4,
      image: ameerpet,
      latitude: 17.4374,
      longitude: 78.4487
    },
    {
      id: 8,
      name: "Kondapur Central Parking",
      location: "Kondapur",
      address: "308 Financial District Road, Kondapur, Hyderabad",
      availableSpots: 10,
      price: "₹25/hour",
      distance: "0.7 km",
      rating: 4.2,
      image: kondapur,
      latitude: 17.4611,
      longitude: 78.3604
    },
    {
      id: 9,
      name: "Miyapur Park & Ride",
      location: "Miyapur",
      address: "15 Metro Junction, Miyapur, Hyderabad",
      availableSpots: 30,
      price: "₹12/hour",
      distance: "0.2 km",
      rating: 3.9,
      image: miyapur,
      latitude: 17.4950,
      longitude: 78.3688
    },
    {
      id: 10,
      name: "Secunderabad Railway Parking",
      location: "Secunderabad",
      address: "85 Railway Station Road, Secunderabad, Hyderabad",
      availableSpots: 40,
      price: "₹18/hour",
      distance: "0.4 km",
      rating: 4.0,
      image: secunderabad,
      latitude: 17.4341,
      longitude: 78.5029
    },
  ];

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      let filteredResults = [];
      
      if (searchLocation) {
        // Improved search logic to be more forgiving with partial matches
        const searchTermLower = searchLocation.toLowerCase();
        filteredResults = parkingLocations.filter(
          (location) => {
            return (
              location.location.toLowerCase().includes(searchTermLower) ||
              location.address.toLowerCase().includes(searchTermLower) ||
              location.name.toLowerCase().includes(searchTermLower) ||
              // Check if the search term is a partial match for "Hyderabad" since all locations are in Hyderabad
              "hyderabad".includes(searchTermLower)
            );
          }
        );
        
        // If no results found, return all locations as a fallback (for demo purposes)
        if (filteredResults.length === 0) {
          console.log("No exact matches found, showing all locations");
          filteredResults = parkingLocations;
        }
      } else if (lat && lng) {
        // In a real app, you would calculate proximity based on coordinates
        // For demo, just return all locations
        filteredResults = parkingLocations;
        console.log(`Using coordinates: ${lat}, ${lng}`);
      } else {
        // If no search criteria provided, show all locations
        filteredResults = parkingLocations;
      }
      
      setLocations(filteredResults);
      setIsLoading(false);
    }, 1000); // Simulate loading delay
    
  }, [searchLocation, lat, lng]);

  return (
    <div className="parking-results-page">
      <div className="container py-5">
        <div className="parking-results-header mb-4">
          <h2 className="parking-results-title">
            {searchLocation 
              ? `Parking Spots near "${searchLocation}"` 
              : "Parking Spots near you"}
          </h2>
          <p>
            {/* Updated to link to the app index route */}
            <Link to="/app" className="btn btn-outline-primary btn-sm">
              <i className="bi bi-arrow-left me-2"></i>
              New Search
            </Link>
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Finding parking spots...</p>
          </div>
        ) : locations.length > 0 ? (
          <div className="row">
            {locations.map((location) => (
              <div className="col-md-6 col-lg-4 mb-4" key={location.id}>
                <div className="parking-spot-card">
                  <div className="parking-spot-image">
                    <img src={location.image} alt={location.name} className="img-fluid" />
                    <span className="parking-price-tag">{location.price}</span>
                  </div>
                  <div className="card-body p-3">
                    <h4 className="parking-spot-title">{location.name}</h4>
                    <p className="parking-spot-address">
                      <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                      {location.address}
                    </p>
                    
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="badge bg-success me-2">
                          <i className="bi bi-p-circle-fill me-1"></i>
                          {location.availableSpots} spots
                        </span>
                        <span className="text-muted">
                          <i className="bi bi-compass me-1"></i>
                          {location.distance}
                        </span>
                      </div>
                      <div className="parking-spot-rating">
                        <i className="bi bi-star-fill text-warning"></i>
                        <span className="ms-1">{location.rating}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      {/* Updated to link to the customer-details route with the correct path */}
                      <Link 
                        to={`/app/customer-details/${location.id}?lat=${location.latitude || ''}&lng=${location.longitude || ''}&locationName=${encodeURIComponent(location.name)}&address=${encodeURIComponent(location.address)}&price=${encodeURIComponent(location.price)}`} 
                        className="btn btn-primary w-100"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="parking-no-results text-center py-5">
            <i className="bi bi-emoji-frown display-1 text-muted"></i>
            <h3 className="mt-3">No parking spots found</h3>
            <p>Try searching for a different location</p>
            {/* Updated to link to the app index route */}
            <Link to="/app" className="btn btn-primary mt-3">
              Back to Search
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParkingBooking;