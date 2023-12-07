const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { KEY_REST } = require('../configs');

const registration = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send({ message: 'Enter all input' });
    }
    let hash_pass = await bcrypt.hash(password, 10);
    let user = await User.create({
      email,
      hash_pass,
    });
    const token = jwt.sign(
      {
        user_id: user._id,
        email,
      },
      KEY_REST,
    );
    user.token = token;
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
  }
};

const authorization = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send({ message: 'Enter all input' });
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.hash_pass))) {
      const token = jwt.sign(
        {
          user_id: user._id,
          email,
        },
        KEY_REST,
      );
      user.token = token;
      res.status(201).send(user);
    } else {
      res.status(400).send('Invalid Credentials');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  reg: registration,
  auth: authorization,
};
