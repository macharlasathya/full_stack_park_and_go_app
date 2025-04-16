
const express = require("express");
const Request = require("../models/Request");
const mongoose = require("mongoose");


const router = express.Router();

// Handle requests at both endpoints
router.post("/", saveRequest);
router.post("/add", saveRequest);

async function saveRequest(req, res) {
  try {
    console.log("Request data received:", JSON.stringify(req.body, null, 2));
    
    // Check database connection first
    if (mongoose.connection.readyState !== 1) {
      console.error("MongoDB not connected when trying to save request");
      return res.status(500).json({
        success: false,
        error: "Database connection issue",
        details: "MongoDB connection is not ready"
      });
    }
    
    const {
      name,
      email,
      contactNumber,
      address,
      requestDetails,
      location
    } = req.body;
    
    // Validate required fields
    if (!name || !email || !contactNumber || !address || !requestDetails || !location) {
      console.warn("Missing required fields in request data");
      return res.status(400).json({
        success: false,
        error: "All fields are required"
      });
    }
    
    // Create request document
    const newRequest = new Request({
      name,
      email,
      contactNumber,
      address,
      requestDetails,
      location,
      date: new Date(),
      status: "Pending"
    });
    
    console.log("Request document created:", JSON.stringify(newRequest, null, 2));
    
    // Check for validation errors
    const validationError = newRequest.validateSync();
    if (validationError) {
      console.error("Validation error:", validationError);
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: validationError.message
      });
    }
    
    // Save document with promise
    console.log("Attempting to save request...");
    const savedRequest = await newRequest.save();
    console.log("Request saved successfully with ID:", savedRequest._id);
    
    // Return success response
    res.status(201).json({
      success: true,
      message: "Request submitted successfully",
      request: savedRequest
    });
  } catch (error) {
    console.error("Error saving request:", error);
    
    // Return detailed error response
    res.status(500).json({
      success: false,
      error: "Server error",
      message: error.message,
      stack: process.env.NODE_ENV === 'production' ? undefined : error.stack
    });
  }
}

// Get all requests
router.get("/", async (req, res) => {
  try {
    const requests = await Request.find().sort({ date: -1 });
    console.log(`Found ${requests.length} requests`);
    
    res.status(200).json({
      success: true,
      count: requests.length,
      data: requests
    });
  } catch (error) {
    console.error("Error fetching requests:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;