const Contact = require('../models/Contact');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });
    res.status(201).json({
      message: 'Form submitted successfully',
      contact,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  submitContactForm,
};
