const userSchema = require("../models/userModel");
const auth = require("../middlewares/auth.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userControler = {
  //-----------------USER REGISTER-----------------
  registerUser: async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const user = await userSchema.findOne({ email: email });
      if (user) {
        return res.status(400).json({ msg: "Email already registered" });
      }
      //create big password and then update the schema
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new userSchema({
        username: username,
        email: email,
        password: passwordHash,
      });
      await newUser.save();
      res.json({ msg: "User registered success" });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },

  //---------------------LOGIN-------------------------
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userSchema.findOne({ email: email });
      if (!user) {
        return res.status(400).json({ msg: "User does not exist" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Password is incorrect" });
      }

      //if login is successful
      const payload = {
        id: user._id,
        name: user.username,
      };
      const token = jwt.sign(payload, process.env.MY_TOKEN, {
        expiresIn: "1d",
      });
      res.json({ token });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  //------------------------VERIFY--------------------------
  verifiedToken: async (req, res) => {
    try {
      const token = req.header("Authorization");
      if (!token) return res.send(false);
      jwt.verify(token, process.env.MY_TOKEN, async (err, verified) => {
        if (err) return res.send(false);

        const user = await userSchema.findById(verified.id);
        if (!user) return res.send(false);

        return res.send(true);
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = userControler;
