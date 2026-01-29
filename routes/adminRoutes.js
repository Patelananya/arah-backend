const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Admin = require("../models/Admin");

// ⚠️ TEMPORARY ROUTE — DELETE AFTER SUCCESS
router.post("/seed-admin", async (req, res) => {
  try {
    // Ensure DB connection (Vercel-safe)
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI);
    }

    await Admin.deleteMany();

    await Admin.create({
      email: "admin@arahinfotech.com",
      password: "admin@123", // bcrypt will hash automatically
    });

    res.json({ message: "✅ Admin seeded successfully" });
  } catch (error) {
    console.error("Seed admin error:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
