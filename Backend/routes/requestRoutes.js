// const express = require("express");
// const Request = require("../models/Request");

// const router = express.Router();

// // Route to submit a new request
// router.post("/add", async (req, res) => {
//   try {
//     const { userId, requestDetails, location } = req.body;

//     // Check if all required fields are provided
//     if (!userId || !requestDetails || !location) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const newRequest = new Request({
//       userId,
//       requestDetails,
//       location
//     });

//     await newRequest.save();
//     res.status(201).json({ message: "Request submitted successfully", request: newRequest });

//   } catch (error) {
//     console.error("Error while submitting request:", error);
//     res.status(500).json({ error: "Server error, request not saved" });
//   }
// });

// // Route to get all requests
// router.get("/all", async (req, res) => {
//   try {
//     const requests = await Request.find().populate("userId", "email"); // Fetch user details
//     res.status(200).json(requests);
//   } catch (error) {
//     console.error("Error while fetching requests:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = router;



const express = require("express");
const mongoose = require("mongoose"); // Add this import
const Request = require("../models/Request");

const router = express.Router();

// Route to submit a new request
router.post("/add", async (req, res) => {
  try {
    const { userId, requestDetails, location } = req.body;
    
    // Check if all required fields are provided
    if (!userId || !requestDetails || !location) {
      return res.status(400).json({ error: "All fields are required" });
    }
    
    // Validate userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid user ID format" });
    }
    
    const newRequest = new Request({
      userId,
      requestDetails,
      location
    });
    
    await newRequest.save();
    res.status(201).json({ message: "Request submitted successfully", request: newRequest });
  } catch (error) {
    console.error("Error while submitting request:", error.message);
    res.status(500).json({ error: "Server error, request not saved", details: error.message });
  }
});

// Route to get all requests
router.get("/all", async (req, res) => {
  try {
    const requests = await Request.find().populate("userId", "email"); // Fetch user details
    res.status(200).json(requests);
  } catch (error) {
    console.error("Error while fetching requests:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
