const User = require("../BE_Models/user");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const {
      body: { email, name, phoneNumber },
    } = req;
    console.log(req.body);
    const user = await User.create({ email, name, phoneNumber });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getUsers, createUser };
