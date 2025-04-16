
const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  contactNumber: { 
    type: String, 
    required: true 
  },
  address: { 
    type: String, 
    required: true 
  },
  requestDetails: { 
    type: String, 
    required: true 
  },
  location: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  status: { 
    type: String, 
    default: "Pending" 
  }
});

const Request = mongoose.model("Request", RequestSchema);
module.exports = Request;
