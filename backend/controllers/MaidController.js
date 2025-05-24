const Maid = require('../models/MaidModel');

const saveMaidData = async (req, res) => {
  try {
    // req.body has text fields
    const data = { ...req.body };

    // multer put files in req.files
    if (req.files.photo) {
      data.photo = req.files.photo[0].filename;
    }
    if (req.files.idProof) {
      data.idProof = req.files.idProof[0].filename;
    }

    const newMaid = new Maid(data);
    await newMaid.save();
    return res.status(200).json({ message: 'Maid data saved successfully!' });
  } catch (err) {
    console.error('Save error:', err);
    return res.status(500).json({ message: 'Server error saving data' });
  }
};

const getData = async (req, res) => {
  try {
    const maid = await Maid.findById(req.params.id);
    return res.status(200).json(maid);
  } catch (err) {
    console.error('Fetch error:', err);
    return res.status(500).json({ message: 'Server error fetching data' });
  }
};

module.exports = { saveMaidData, getData };
