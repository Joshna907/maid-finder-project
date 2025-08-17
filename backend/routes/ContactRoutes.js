const express = require('express');
const router = express.Router();
const { saveContactMessage } = require('../controllers/ContactController');

router.post('/contact', saveContactMessage);

module.exports = router;
