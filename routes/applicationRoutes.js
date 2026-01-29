const express = require('express');
const router = express.Router();
const {
  createApplication,
  getApplications,
  getApplicationsByJob,
} = require('../controllers/applicationController');
const { protect } = require('../middleware/authMiddleware');

// Public route
router.post('/', createApplication);

// Protected Admin routes
router.get('/admin', protect, getApplications);
router.get('/admin/:jobId', protect, getApplicationsByJob);

module.exports = router;
