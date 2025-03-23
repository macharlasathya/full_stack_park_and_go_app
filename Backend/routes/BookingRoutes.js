// const express = require('express');
// const router = express.Router();
// const ParkingRecord = require('../models/Booking');

// // Create new parking record
// router.post('/', async (req, res, next) => {
//   try {
//     const {
//       fullName,
//       mobileNumber,
//       vehicleNumber,
//       entryTime,
//       exitTime,
//       parkingLocation,
//       paymentInformation,
//       pricePerHour,
//       duration,
//       totalAmount,
//       orderNumber,
//       status,
//       reference,
//       timestamp
//     } = req.body;

//     // Calculate total amount if it's NaN
//     let calculatedTotal = totalAmount;
//     if (isNaN(calculatedTotal)) {
//       calculatedTotal = pricePerHour * duration;
//     }

//     const newRecord = new ParkingRecord({
//       fullName,
//       mobileNumber,
//       vehicleNumber,
//       entryTime: new Date(entryTime),
//       exitTime: new Date(exitTime),
//       parkingLocation,
//       paymentInformation,
//       pricePerHour,
//       duration,
//       totalAmount: calculatedTotal,
//       orderNumber,
//       status,
//       paymentVerified: status === 'Completed',
//       reference,
//       timestamp: timestamp ? new Date(timestamp) : new Date()
//     });

//     const savedRecord = await newRecord.save();
    
//     res.status(201).json({
//       success: true,
//       data: savedRecord
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// // Get all parking records
// router.get('/', async (req, res, next) => {
//   try {
//     const records = await ParkingRecord.find().sort({ createdAt: -1 });
    
//     res.status(200).json({
//       success: true,
//       count: records.length,
//       data: records
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// // Get parking record by order number
// router.get('/:orderNumber', async (req, res, next) => {
//   try {
//     const record = await ParkingRecord.findOne({ orderNumber: req.params.orderNumber });
    
//     if (!record) {
//       return res.status(404).json({
//         success: false,
//         error: 'No record found with that order number'
//       });
//     }
    
//     res.status(200).json({
//       success: true,
//       data: record
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// // Update parking record
// router.put('/:orderNumber', async (req, res, next) => {
//   try {
//     const record = await ParkingRecord.findOneAndUpdate(
//       { orderNumber: req.params.orderNumber },
//       req.body,
//       { new: true, runValidators: true }
//     );
    
//     if (!record) {
//       return res.status(404).json({
//         success: false,
//         error: 'No record found with that order number'
//       });
//     }
    
//     res.status(200).json({
//       success: true,
//       data: record
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = router;




// const express = require('express');
// const router = express.Router();
// const Booking = require('../models/Booking');

// // Create new booking record
// router.post('/', async (req, res, next) => {
//   try {
//     const {
//       fullName,
//       mobileNumber,
//       vehicleNumber,
//       entryTime,
//       exitTime,
//       parkingLocation,
//       paymentInformation,
//       pricePerHour,
//       duration,
//       totalAmount,
//       orderNumber,
//       status,
//       reference,
//       timestamp
//     } = req.body;
    
//     // Calculate total amount if it's NaN
//     let calculatedTotal = totalAmount;
//     if (isNaN(calculatedTotal)) {
//       calculatedTotal = pricePerHour * duration;
//     }
    
//     const newRecord = new Booking({
//       fullName,
//       mobileNumber,
//       vehicleNumber,
//       entryTime: new Date(entryTime),
//       exitTime: new Date(exitTime),
//       parkingLocation,
//       paymentInformation,
//       pricePerHour,
//       duration,
//       totalAmount: calculatedTotal,
//       orderNumber,
//       status,
//       paymentVerified: status === 'Completed',
//       reference,
//       timestamp: timestamp ? new Date(timestamp) : new Date()
//     });
    
//     const savedRecord = await newRecord.save();
        
//     res.status(201).json({
//       success: true,
//       data: savedRecord
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// // Get all booking records
// router.get('/', async (req, res, next) => {
//   try {
//     const records = await Booking.find().sort({ createdAt: -1 });
        
//     res.status(200).json({
//       success: true,
//       count: records.length,
//       data: records
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// // Get booking record by order number
// router.get('/:orderNumber', async (req, res, next) => {
//   try {
//     const record = await Booking.findOne({ orderNumber: req.params.orderNumber });
        
//     if (!record) {
//       return res.status(404).json({
//         success: false,
//         error: 'No record found with that order number'
//       });
//     }
        
//     res.status(200).json({
//       success: true,
//       data: record
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// // Update booking record
// router.put('/:orderNumber', async (req, res, next) => {
//   try {
//     const record = await Booking.findOneAndUpdate(
//       { orderNumber: req.params.orderNumber },
//       req.body,
//       { new: true, runValidators: true }
//     );
        
//     if (!record) {
//       return res.status(404).json({
//         success: false,
//         error: 'No record found with that order number'
//       });
//     }
        
//     res.status(200).json({
//       success: true,
//       data: record
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Booking = require('../models/Booking');

// // Create new booking record
// router.post('/', async (req, res, next) => {
//   try {
//     const {
//       fullName,
//       mobileNumber,
//       vehicleNumber,
//       entryTime,
//       exitTime,
//       parkingLocation,
//       paymentInformation,
//       pricePerHour,
//       duration,
//       totalAmount,
//       orderNumber,
//       status,
//       reference,
//       timestamp
//     } = req.body;
    
//     // Log the received data for debugging
//     console.log('Received booking data:', req.body);
    
//     // Calculate total amount if it's NaN
//     let calculatedTotal = totalAmount;
//     if (isNaN(calculatedTotal)) {
//       calculatedTotal = pricePerHour * duration;
//     }
    
//     const newRecord = new Booking({
//       fullName,
//       mobileNumber,
//       vehicleNumber,
//       entryTime: new Date(entryTime),
//       exitTime: new Date(exitTime),
//       parkingLocation,
//       paymentInformation,
//       pricePerHour,
//       duration,
//       totalAmount: calculatedTotal,
//       orderNumber,
//       status,
//       paymentVerified: status === 'Completed',
//       reference,
//       timestamp: timestamp ? new Date(timestamp) : new Date()
//     });
    
//     console.log('About to save record:', newRecord);
    
//     const savedRecord = await newRecord.save();
    
//     console.log('Record saved successfully:', savedRecord);
    
//     res.status(201).json({
//       success: true,
//       data: savedRecord
//     });
//   } catch (error) {
//     console.error('Error saving booking:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Rest of your routes remain the same
// // ...

// module.exports = router;





const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Create new booking record
router.post('/', async (req, res, next) => {
  try {
    // Log the full request body for debugging
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
    
    // Log the extracted data for debugging
    console.log('Extracted booking data:', {
      fullName,
      mobileNumber,
      vehicleNumber,
      entryTime,
      exitTime,
      orderNumber,
      status
    });
    
    // Calculate total amount if it's NaN
    let calculatedTotal = totalAmount;
    if (isNaN(calculatedTotal)) {
      calculatedTotal = pricePerHour * duration;
      console.log(`Calculated total amount: ${calculatedTotal} (${pricePerHour} * ${duration})`);
    }
    
    // Create new booking record with properly structured data
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
    
    // Enhanced error response
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

// Get all bookings
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

// Get booking by ID
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