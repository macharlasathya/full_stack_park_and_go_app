
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./ParkingSearchCard.css";

const ParkingSearchCard = () => {
  const [activeTab, setActiveTab] = useState("findSpot");
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("Current path:", location.pathname);

    if (location.pathname === "/") {
      setIsSearching(false);
    }
  }, [location.pathname]);

  const handleSearch = (e) => {
    if (e) e.preventDefault();

    if (searchText.trim()) {
      console.log("Searching for:", searchText);
      setIsSearching(true);

      navigate(`/app/parking-booking?location=${encodeURIComponent(searchText)}`);
    }
  };

  const useCurrentLocation = () => {
    if (navigator.geolocation) {
      setIsSearching(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Got coordinates: ${latitude}, ${longitude}`);

          navigate(`/app/parking-booking?lat=${latitude}&lng=${longitude}`);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to get your location. Please try searching by location name.");
          setIsSearching(false);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser");
    }
  };

  return (
    <div className="parking-search-wrapper">
      <div className="background-container">
        <div className="overlay">
          <div className="content-container d-flex justify-content-center align-items-center">
            <div className="parking-card p-4 p-md-5">

              <div className="d-flex justify-content-between mb-4">
                <button
                  className={`feature-btn ${activeTab === "findSpot" ? "bg-primary text-white" : "bg-light text-primary"
                    }`}
                  onClick={() => setActiveTab("findSpot")}
                >
                  <i className="bi bi-geo-alt me-2"></i>
                  Find the Spot
                </button>

                <Link
                  to="/app/find-charges"
                  className={`feature-btn ms-3 text-decoration-none d-flex align-items-center justify-content-center ${activeTab === "findPrice" ? "bg-primary text-white" : "bg-light text-primary"
                    }`}
                >
                  <i className="bi bi-currency-dollar me-2"></i>
                  Find the Price
                </Link>
              </div>

              <div className="bg-primary" style={{ height: "3px", width: "100%", marginBottom: "25px" }}></div>

              <h2 className="title-text text-center">Search Parking Spot in Seconds</h2>

              <form onSubmit={handleSearch} className="my-4">
                <div className="search-container">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Enter location"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                  <i className="bi bi-search search-icon" onClick={handleSearch}></i>
                </div>

                <div className="text-center my-3">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={useCurrentLocation}
                    disabled={isSearching}
                  >
                    <i className="bi bi-geo me-2"></i>
                    See All Locations
                  </button>
                </div>

                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="full-search-btn btn btn-primary"
                    disabled={isSearching || !searchText.trim()}
                  >
                    {isSearching ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Searching...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-search me-2"></i>
                        Search
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingSearchCard;

