const express = require("express");
const router = express.Router();

const { loginAdmin } = require("../controllers/adminController");
const Admin = require("../models/Admin"); // ✅ REQUIRED

// ✅ NORMAL ADMIN LOGIN ROUTE (DO NOT COMMENT THIS)
router.post("/login", loginAdmin);

// ⚠️ TEMPORARY — REMOVE AFTER FIRST USE
router.post("/seed-admin", async (req, res) => {
  try {
    await Admin.deleteMany();

    await Admin.create({
      email: "admin@arahinfotech.com",
      password: "admin@123",
    });

    res.json({ message: "Admin seeded successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
