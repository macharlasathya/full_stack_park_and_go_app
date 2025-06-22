
// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const Request = require('../models/Request');


// const router = express.Router();


// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;


//     if (!email || !password) {
//       return res.status(400).json({ success: false, message: 'Email and password are required' });
//     }


//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ success: false, message: 'Invalid credentials' });


//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ success: false, message: 'Invalid credentials' });


//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1h' });

//     res.json({ success: true, token, user: { id: user._id, name: user.name, email: user.email } });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });


// router.post('/register', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;


//     if (!name || !email || !password) {
//       return res.status(400).json({ success: false, message: 'Name, email and password are required' });
//     }


//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({ success: false, message: 'Please provide a valid email address' });
//     }


//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ success: false, message: 'User already exists' });
//     }


//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword
//     });


//     await newUser.save();

// 0
//     res.status(201).json({
//       success: true,
//      message: 'User registered successfully',
//     });
//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).json({ success: false, message: 'Server error during registration' });
//   }
// });


// router.post('/requests', async (req, res) => {
//   try {
//     const { name, email, contactNumber, address, requestDetails, location } = req.body;


//     if (!name || !email || !contactNumber || !address || !requestDetails) {
//       return res.status(400).json({ success: false, message: 'All required fields must be provided' });
//     }


//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({ success: false, message: 'Please provide a valid email address' });
//     }


//     const newRequest = new Request({
//       name,
//       email,
//       contactNumber,
//       address,
//       requestDetails,
//       location
//     });


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

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    console.log('Login attempt:', { email }); // Log the email being used to attempt login
    
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }
    
    const user = await User.findOne({ email });
    console.log('User found in DB:', user ? 'Yes' : 'No'); // Check if user was found
    
    if (!user) return res.status(401).json({ success: false, message: 'Invalid credentials' });
    
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match:', isMatch); // Check if password matched
    
    if (!isMatch) return res.status(401).json({ success: false, message: 'Invalid credentials' });
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1h' });
    res.json({ success: true, token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Name, email and password are required' });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address' });
    }
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });
    
    await newUser.save();
    
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ success: false, message: 'Server error during registration' });
  }
});

router.post('/requests', async (req, res) => {
  try {
    const { name, email, contactNumber, address, requestDetails, location } = req.body;
    
    if (!name || !email || !contactNumber || !address || !requestDetails) {
      return res.status(400).json({ success: false, message: 'All required fields must be provided' });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address' });
    }
    
    const newRequest = new Request({
      name,
      email,
      contactNumber,
      address,
      requestDetails,
      location
    });
    
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