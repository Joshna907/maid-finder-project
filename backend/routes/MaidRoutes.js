const express = require('express');
const multer = require('multer');
const { saveMaidData, getAllMaids,updateMaidStatus } = require('../controllers/MaidController');
const Maid = require('../models/MaidModel'); 


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

router.get('/maids', getAllMaids);
router.patch('/maids/:id', updateMaidStatus);

router.get('/maids/:id', async (req, res) => {
  try {
    const maid = await Maid.findById(req.params.id);
    if (!maid) return res.status(404).json({ message: 'Maid not found' });
    res.json(maid);
  } catch (err) {
    console.error(err);  // log the actual error to see details
    res.status(500).json({ message: 'Server error' });
  }
});


router.get('/maids/by-email/:email', async (req, res) => {
  try {
    const maid = await Maid.findOne({ email: req.params.email });

    if (!maid) {
      return res.status(404).json({ message: 'Maid not found' });
    }

    res.status(200).json(maid);
  } catch (err) {
    console.error("Error fetching maid by email:", err);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
