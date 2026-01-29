const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Admin = require("../models/Admin");

const { loginAdmin } = require("../controllers/adminController");

router.post("/login", loginAdmin);

// TEMPORARY SEED ROUTE
// router.post("/seed-admin", async (req, res) => {
//   try {
//     if (mongoose.connection.readyState === 0) {
//       await mongoose.connect(process.env.MONGO_URI);
//     }

//     await Admin.deleteMany();

//     const admin = await Admin.create({
//       email: "admin@arahinfotech.com",
//       password: "admin@123",
//     });

//     res.status(200).json({
//       message: "Admin seeded successfully",
//       email: admin.email,
//     });
//   } catch (error) {
//     console.error("Seed error:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = router;
