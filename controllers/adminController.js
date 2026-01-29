// const jwt = require('jsonwebtoken');
// const Admin = require('../models/Admin');

// // Generate JWT
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '30d',
//   });
// };

// // @desc    Auth admin & get token
// // @route   POST /api/admin/login
// // @access  Public
// const loginAdmin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const admin = await Admin.findOne({ email });

//     if (admin && (await admin.matchPassword(password))) {
//       res.json({
//         _id: admin._id,
//         email: admin.email,
//         token: generateToken(admin._id),
//       });
//     } else {
//       res.status(401).json({ message: 'Invalid email or password' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = {
//   loginAdmin,
// };


const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const loginAdmin = async (req, res) => {
  try {
    // ✅ ENSURE DB CONNECTION (VERCEL SAFE)
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI);
    }

    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (admin && (await admin.matchPassword(password))) {
      return res.status(200).json({
        _id: admin._id,
        email: admin.email,
        token: generateToken(admin._id),
      });
    }

    return res.status(401).json({ message: "Invalid email or password" });
  } catch (error) {
    console.error("Admin login error:", error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { loginAdmin };

