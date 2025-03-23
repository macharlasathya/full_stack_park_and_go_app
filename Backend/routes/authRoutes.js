// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const router = express.Router();

// // User Registration
// router.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ msg: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     user = new User({ name, email, password: hashedPassword });

//     await user.save();
//     res.status(201).json({ msg: "User registered successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // User Login
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ msg: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
//     res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = router;
// Import the Request model at the top of your file




  // const express = require('express');
  // const bcrypt = require('bcryptjs');
  // const jwt = require('jsonwebtoken');
  // const User = require('../models/User');
  // const Request = require('../models/Request'); // Make sure to import the Request model

  // // Initialize the router
  // const router = express.Router();

  // // Your existing login route
  // router.post('/login', async (req, res) => {
  //   try {
  //     const { email, password } = req.body;
      
  //     // Find user
  //     const user = await User.findOne({ email });
  //     if (!user) return res.status(400).json({ message: 'Invalid credentials' });
      
  //     // Compare password
  //     const isMatch = await bcrypt.compare(password, user.password);
  //     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
      
  //     // Generate token
  //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1h' });
      
  //     res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: 'Server error' });
  //   }
  // });

  // // Your existing register route
  // router.post('/register', async (req, res) => {
  //   try {
  //     const { name, email, password } = req.body;
      
  //     // Check if user already exists
  //     const existingUser = await User.findOne({ email });
  //     if (existingUser) {
  //       return res.status(400).json({ message: 'User already exists' });
  //     }
      
  //     // Hash password
  //     const salt = await bcrypt.genSalt(10);
  //     const hashedPassword = await bcrypt.hash(password, salt);
      
  //     // Create new user
  //     const newUser = new User({
  //       name,
  //       email,
  //       password: hashedPassword
  //     });
      
  //     // Save user to DB
  //     await newUser.save();
      
  //     // Generate token
  //     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1h' });
      
  //     res.status(201).json({
  //       token,
  //       user: { id: newUser._id, name: newUser.name, email: newUser.email }
  //     });
  //   } catch (error) {
  //     console.error('Registration error:', error);
  //     res.status(500).json({ message: 'Server error during registration' });
  //   }
  // });

  // // Request Form Submission Route
  // router.post('/requests', async (req, res) => {
  //   try {
  //     const { name, email, contactNumber, address, requestDetails, location } = req.body;
      
  //     // Create new request
  //     const newRequest = new Request({
  //       name,
  //       email,
  //       contactNumber,
  //       address,
  //       requestDetails,
  //       location
  //       // date and status will use their default values
  //     });
      
  //     // Save request to DB
  //     await newRequest.save();
      
  //     res.status(201).json({
  //       success: true,
  //       message: 'Request submitted successfully',
  //       request: newRequest
  //     });
  //   } catch (error) {
  //     console.error('Request submission error:', error);
  //     res.status(500).json({ message: 'Server error during request submission' });
  //   }
  // });

  // module.exports = router;


//   const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const Request = require('../models/Request');

// // Initialize the router
// const router = express.Router();

// // Login route
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     // Find user
//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ success: false, message: 'Invalid credentials' });
    
//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ success: false, message: 'Invalid credentials' });
    
//     // Generate token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1h' });
    
//     res.json({ success: true, token, user: { id: user._id, name: user.name, email: user.email } });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });

// // Register route
// router.post('/register', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
    
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ success: false, message: 'User already exists' });
//     }
    
//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
    
//     // Create new user
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword
//     });
    
//     // Save user to DB
//     await newUser.save();
    
//     // Generate token
//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1h' });
    
//     res.status(201).json({
//       success: true,
//       token,
//       user: { id: newUser._id, name: newUser.name, email: newUser.email }
//     });
//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).json({ success: false, message: 'Server error during registration' });
//   }
// });

// // Request Form Submission Route
// router.post('/requests', async (req, res) => {
//   try {
//     const { name, email, contactNumber, address, requestDetails, location } = req.body;
    
//     // Create new request
//     const newRequest = new Request({
//       name,
//       email,
//       contactNumber,
//       address,
//       requestDetails,
//       location
//     });
    
//     // Save request to DB
//     await newRequest.save();
    
//     res.status(201).json({
//       success: true,
//       message: 'Request submitted successfully',
//       request: newRequest
//     });
//   } catch (error) {
//     console.error('Request submission error:', error);
//     res.status(500).json({ success: false, message: 'Server error during request submission' });
//   }
// });

// module.exports = router;

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Request = require('../models/Request');

// Initialize the router
const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Input validation
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ success: false, message: 'Invalid credentials' });
    
    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ success: false, message: 'Invalid credentials' });
    
    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1h' });
    
    res.json({ success: true, token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Register route
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Input validation
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Name, email and password are required' });
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address' });
    }
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });
    
    // Save user to DB
    await newUser.save();
    
    // Generate token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1h' });
    
    res.status(201).json({
      success: true,
      token,
      user: { id: newUser._id, name: newUser.name, email: newUser.email }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ success: false, message: 'Server error during registration' });
  }
});

// Request Form Submission Route
router.post('/requests', async (req, res) => {
  try {
    const { name, email, contactNumber, address, requestDetails, location } = req.body;
    
    // Input validation
    if (!name || !email || !contactNumber || !address || !requestDetails) {
      return res.status(400).json({ success: false, message: 'All required fields must be provided' });
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address' });
    }
    
    // Create new request
    const newRequest = new Request({
      name,
      email,
      contactNumber,
      address,
      requestDetails,
      location
    });
    
    // Save request to DB
    await newRequest.save();
    
    res.status(201).json({
      success: true,
      message: 'Request submitted successfully',
      request: newRequest
    });
  } catch (error) {
    console.error('Request submission error:', error);
    res.status(500).json({ success: false, message: 'Server error during request submission' });
  }
});

module.exports = router;