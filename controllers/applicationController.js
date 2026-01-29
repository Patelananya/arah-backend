const Application = require('../models/Application');
const Job = require('../models/Job');

// @desc    Create new job application
// @route   POST /api/applications
// @access  Public
const createApplication = async (req, res) => {
  const { jobId, applicantName, applicantEmail, applicantPhone, resumeLink, message } = req.body;

  try {
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    const application = await Application.create({
      jobId,
      jobTitle: job.title,
      applicantName,
      applicantEmail,
      applicantPhone,
      resumeLink,
      message,
    });

    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all applications
// @route   GET /api/admin/applications
// @access  Private/Admin
const getApplications = async (req, res) => {
  try {
    const applications = await Application.find({}).sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get applications by job ID
// @route   GET /api/admin/applications/:jobId
// @access  Private/Admin
const getApplicationsByJob = async (req, res) => {
  try {
    const applications = await Application.find({ jobId: req.params.jobId }).sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createApplication,
  getApplications,
  getApplicationsByJob,
};
