
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  mobileNumber: {
    type: String,
    required: true,
    trim: true
  },
  vehicleNumber: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  entryTime: {
    type: Date,
    required: true
  },
  exitTime: {
    type: Date,
    required: true
  },
  parkingLocation: {
    coordinates: {
      type: [Number],
      default: []
    },
    name: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    }
  },
  paymentInformation: {
    method: {
      type: String,
      default: 'UPI'
    },
    reference: {
      type: String,
      default: ''
    }
  },
  pricePerHour: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  totalAmount: {
    type: Number
  },
  orderNumber: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    default: 'Pending'
  },
  paymentVerified: {
    type: Boolean,
    default: false
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  reference: {
    type: String
  }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
