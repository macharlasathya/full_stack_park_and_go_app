const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/BookingRoutes');
const requestRoutes = require('./routes/requestRoutes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/request',requestRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: err.message || 'Server Error'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





