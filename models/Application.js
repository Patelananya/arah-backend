const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Job',
    },
    jobTitle: {
      type: String,
      required: true,
    },
    applicantName: {
      type: String,
      required: [true, 'Please add your full name'],
    },
    applicantEmail: {
      type: String,
      required: [true, 'Please add your email'],
    },
    applicantPhone: {
      type: String,
      required: [true, 'Please add your phone number'],
    },
    resumeLink: {
      type: String,
      required: [true, 'Please add a link to your resume'],
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Application', applicationSchema);
