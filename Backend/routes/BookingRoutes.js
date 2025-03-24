
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');


router.post('/', async (req, res, next) => {
  try {

    console.log('Received booking request with body:', JSON.stringify(req.body, null, 2));

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
      reference,
      timestamp
    } = req.body;


    console.log('Extracted booking data:', {
      fullName,
      mobileNumber,
      vehicleNumber,
      entryTime,
      exitTime,
      orderNumber,
      status
    });


    let calculatedTotal = totalAmount;
    if (isNaN(calculatedTotal)) {
      calculatedTotal = pricePerHour * duration;
      console.log(`Calculated total amount: ${calculatedTotal} (${pricePerHour} * ${duration})`);
    }


    const newRecord = new Booking({
      fullName,
      mobileNumber,
      vehicleNumber,
      entryTime: new Date(entryTime),
      exitTime: new Date(exitTime),
      parkingLocation: {
        coordinates: parkingLocation?.coordinates || [],
        name: parkingLocation?.name || '',
        address: parkingLocation?.address || ''
      },
      paymentInformation: {
        method: paymentInformation?.method || 'UPI',
        reference: paymentInformation?.reference || reference || ''
      },
      pricePerHour,
      duration,
      totalAmount: calculatedTotal,
      orderNumber,
      status,
      paymentVerified: status === 'Completed',
      reference,
      timestamp: timestamp ? new Date(timestamp) : new Date()
    });

    console.log('About to save record:', JSON.stringify(newRecord, null, 2));

    const savedRecord = await newRecord.save();

    console.log('Record saved successfully with ID:', savedRecord._id);

    res.status(201).json({
      success: true,
      data: savedRecord
    });
  } catch (error) {
    console.error('Error saving booking:', error);


    res.status(500).json({
      success: false,
      error: error.message,
      details: error.stack,
      validationErrors: error.errors ? Object.keys(error.errors).map(key => ({
        field: key,
        message: error.errors[key].message
      })) : []
    });
  }
});


router.get('/', async (req, res, next) => {
  try {
    const bookings = await Booking.find().sort({ timestamp: -1 });
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});


router.get('/:id', async (req, res, next) => {
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
    console.error('Error fetching booking:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;