
import React, { useState } from 'react';
import { Table, Container, Form, Card } from 'react-bootstrap';

const ParkingLocations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [vehicleType, setVehicleType] = useState('car');
  
  const parkingLocations = [
    {
      name: "Gachibowli Parking Complex",
      charges: {
        bike: {
          first2Hours: 20,
          next3Hours: 30,
          wholeDay: 100
        },
        car: {
          first2Hours: 50,
          next3Hours: 75,
          wholeDay: 250
        }
      }
    },
    {
      name: "Hitech City Parking Zone",
      charges: {
        bike: {
          first2Hours: 25,
          next3Hours: 35,
          wholeDay: 120
        },
        car: {
          first2Hours: 60,
          next3Hours: 90,
          wholeDay: 300
        }
      }
    },
    {
      name: "Madhapur Public Parking",
      charges: {
        bike: {
          first2Hours: 15,
          next3Hours: 25,
          wholeDay: 80
        },
        car: {
          first2Hours: 40,
          next3Hours: 60,
          wholeDay: 200
        }
      }
    },
    {
      name: "Kukatpally Parking Hub",
      charges: {
        bike: {
          first2Hours: 18,
          next3Hours: 28,
          wholeDay: 90
        },
        car: {
          first2Hours: 45,
          next3Hours: 70,
          wholeDay: 220
        }
      }
    },
    {
      name: "Begumpet Secure Parking",
      charges: {
        bike: {
          first2Hours: 22,
          next3Hours: 32,
          wholeDay: 110
        },
        car: {
          first2Hours: 55,
          next3Hours: 85,
          wholeDay: 280
        }
      }
    },
    {
      name: "Jubilee Hills Premium Parking",
      charges: {
        bike: {
          first2Hours: 30,
          next3Hours: 40,
          wholeDay: 150
        },
        car: {
          first2Hours: 70,
          next3Hours: 100,
          wholeDay: 350
        }
      }
    },
    {
      name: "Ameerpet Metro Parking",
      charges: {
        bike: {
          first2Hours: 20,
          next3Hours: 35,
          wholeDay: 110
        },
        car: {
          first2Hours: 55,
          next3Hours: 85,
          wholeDay: 270
        }
      }
    },
    {
      name: "Kondapur Central Parking",
      charges: {
        bike: {
          first2Hours: 25,
          next3Hours: 35,
          wholeDay: 120
        },
        car: {
          first2Hours: 60,
          next3Hours: 90,
          wholeDay: 290
        }
      }
    },
    {
      name: "Miyapur Park & Ride",
      charges: {
        bike: {
          first2Hours: 15,
          next3Hours: 25,
          wholeDay: 90
        },
        car: {
          first2Hours: 45,
          next3Hours: 70,
          wholeDay: 230
        }
      }
    },
    {
      name: "Secunderabad Railway Parking",
      charges: {
        bike: {
          first2Hours: 20,
          next3Hours: 30,
          wholeDay: 100
        },
        car: {
          first2Hours: 50,
          next3Hours: 75,
          wholeDay: 250
        }
      }
    }
  ];

  const filteredLocations = parkingLocations.filter(location => 
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h2 className="text-center my-4">Parking Locations Charges</h2>
      
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <Form.Control 
          type="text" 
          placeholder="Search parking locations" 
          className="w-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="vehicle-selector d-flex gap-2">
          <Card 
            className={`vehicle-card ${vehicleType === 'car' ? 'selected' : ''}`}
            onClick={() => setVehicleType('car')}
          >
            <Card.Body className="d-flex flex-column align-items-center">
              <span className="mt-2">Car</span>
            </Card.Body>
          </Card>
          
          <Card 
            className={`vehicle-card ${vehicleType === 'bike' ? 'selected' : ''}`}
            onClick={() => setVehicleType('bike')}
          >
            <Card.Body className="d-flex flex-column align-items-center">
              <span className="mt-2">Bike</span>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Location</th>
            <th>First 2 Hours</th>
            <th>Next 3 Hours</th>
            <th>Whole Day</th>
          </tr>
        </thead>
        <tbody>
          {filteredLocations.map((location, index) => (
            <tr key={index}>
              <td>{location.name}</td>
              <td>₹{location.charges[vehicleType].first2Hours}</td>
              <td>₹{location.charges[vehicleType].next3Hours}</td>
              <td>₹{location.charges[vehicleType].wholeDay}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ParkingLocations;