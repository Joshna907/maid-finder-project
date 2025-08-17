const Contact = require('../models/Contact');

const saveContactMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const contactEntry = new Contact({ name, email, subject, message });
    await contactEntry.save();
    res.status(201).json({ message: 'Message saved successfully!' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

module.exports = { saveContactMessage };
