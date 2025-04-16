
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const mongoose = require('mongoose');

router.post('/', async (req, res) => {
  try {
    console.log('Booking data received:', JSON.stringify(req.body, null, 2));
    
    // Check database connection first
    if (mongoose.connection.readyState !== 1) {
      console.error("MongoDB not connected when trying to save booking");
      return res.status(500).json({
        success: false,
        error: "Database connection issue",
        details: "MongoDB connection is not ready"
      });
    }
    
    const {
      fullName,
      mobileNumber,
      vehicleNumber,
      entryTime,
      exitTime,
      parkingLocation,
      paymentInformation,
      pricePerHour,
      duration,
      totalAmount,
      orderNumber,
      status,
      reference
    } = req.body;
    
    // Validate required fields
    const requiredFields = {
      fullName,
      mobileNumber,
      vehicleNumber,
      entryTime,
      exitTime,
      pricePerHour,
      duration,
      orderNumber
    };
    
    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => !value)
      .map(([key]) => key);
    
    if (missingFields.length > 0) {
      console.warn("Missing required fields:", missingFields);
      return res.status(400).json({
        success: false,
        error: "Required fields are missing",
        missingFields
      });
    }
    
    // Parse numeric values
    const numPricePerHour = parseFloat(pricePerHour);
    const numDuration = parseFloat(duration);
    let numTotalAmount = parseFloat(totalAmount);
    
    if (isNaN(numPricePerHour) || isNaN(numDuration)) {
      console.warn("Invalid numeric values:", { pricePerHour, duration });
      return res.status(400).json({
        success: false,
        error: "Invalid numeric values for pricePerHour or duration"
      });
    }
    
    // Calculate total if not provided or invalid
    if (isNaN(numTotalAmount)) {
      numTotalAmount = numPricePerHour * numDuration;
      console.log(`Calculated total amount: ${numTotalAmount}`);
    }
    
    // Parse dates
    let parsedEntryTime, parsedExitTime;
    try {
      parsedEntryTime = new Date(entryTime);
      if (isNaN(parsedEntryTime.getTime())) {
        throw new Error('Invalid entry time format');
      }
    } catch (e) {
      console.warn("Invalid entry time:", entryTime);
      return res.status(400).json({
        success: false,
        error: "Invalid entry time format"
      });
    }
    
    try {
      parsedExitTime = new Date(exitTime);
      if (isNaN(parsedExitTime.getTime())) {
        throw new Error('Invalid exit time format');
      }
    } catch (e) {
      console.warn("Invalid exit time:", exitTime);
      return res.status(400).json({
        success: false,
        error: "Invalid exit time format"
      });
    }
    
    // Create booking document
    const newBooking = new Booking({
      fullName,
      mobileNumber,
      vehicleNumber,
      entryTime: parsedEntryTime,
      exitTime: parsedExitTime,
      parkingLocation: {
        coordinates: parkingLocation?.coordinates || [],
        name: parkingLocation?.name || '',
        address: parkingLocation?.address || ''
      },
      paymentInformation: {
        method: paymentInformation?.method || 'UPI',
        reference: paymentInformation?.reference || reference || ''
      },
      pricePerHour: numPricePerHour,
      duration: numDuration,
      totalAmount: numTotalAmount,
      orderNumber,
      status: status || 'Pending',
      paymentVerified: status === 'Completed',
      reference,
      timestamp: new Date()
    });
    
    console.log("Booking document created:", JSON.stringify(newBooking, null, 2));
    
    // Check for validation errors
    const validationError = newBooking.validateSync();
    if (validationError) {
      console.error("Validation error:", validationError);
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: validationError.message
      });
    }
    
    // Save booking
    console.log("Attempting to save booking...");
    const savedBooking = await newBooking.save();
    console.log("Booking saved successfully with ID:", savedBooking._id);
    
    // Return success response
    res.status(201).json({
      success: true,
      data: savedBooking
    });
  } catch (error) {
    console.error("Error saving booking:", error);
    
    // Check for duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: "Duplicate order number",
        message: "A booking with this order number already exists"
      });
    }
    
    // Return detailed error response
    res.status(500).json({
      success: false,
      error: "Server error",
      message: error.message,
      stack: process.env.NODE_ENV === 'production' ? undefined : error.stack
    });
  }
});

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ timestamp: -1 });
    console.log(`Found ${bookings.length} bookings`);
    
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get single booking
router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: booking
    });
  } catch (error) {
    console.error("Error fetching booking:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;