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

// Get all maids
const getAllMaids = async (req, res) => {
  try {
    const maids = await Maid.find(); // ✅ Find ALL maids
    return res.status(200).json(maids);
  } catch (err) {
    console.error('Fetch error:', err);
    return res.status(500).json({ message: 'Server error fetching maids' });
  }
};

//updated maid status

const updateMaidStatus = async (req, res) => {
  try {
    const maidId = req.params.id;
    const { status } = req.body;

    const updatedMaid = await Maid.findByIdAndUpdate(
      maidId,
      { status },
      { new: true }
    );

    if (!updatedMaid) {
      return res.status(404).json({ message: 'Maid not found' });
    }

    res.status(200).json({ message: 'Maid status updated', maid: updatedMaid });
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ message: 'Server error updating maid status' });
  }
};


module.exports = { saveMaidData,getAllMaids,updateMaidStatus };
