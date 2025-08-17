const bcrypt = require('bcrypt');
const User = require('../models/User');

const registerUser = async (req, res) => {
  const { fullName, email,role, password, confirmpassword } = req.body;

  if (password !== confirmpassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ fullName, email, role,password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Signup successful', user: newUser.fullName });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};


const loginUser = async(req,res) =>{
  const{email,password} = req.body;

  try{
    //find user by email
    const user = await User.findOne({email});
    if(!user){
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare entered password with hashed password
     
    const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
      res.status(200).json({
  message: "Login successful",
  user: {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    role: user.role
  }
});
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
}

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password'); // hide password
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser ,loginUser,getUserById};
