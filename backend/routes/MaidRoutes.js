const express = require('express');
const multer = require('multer');
const { saveMaidData, getData } = require('../controllers/MaidController');

const router = express.Router();

// Configure multer storage (disk storage into 'uploads' folder)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// POST /api/save — handle up to two file fields
router.post(
  '/save',
  upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'idProof', maxCount: 1 },
  ]),
  saveMaidData
);

router.get('/maid/:id', getData);

module.exports = router;
