const Job = require('../models/Job');

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Public
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a job
// @route   POST /api/jobs
// @access  Private (for now public for testing)
const createJob = async (req, res) => {
  try {
    const { title, location, experience, description } = req.body;
    const job = await Job.create({
      title,
      location,
      experience,
      description,
    });
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getJobs,
  createJob,
};
