const { createUser } = require('../services/user.service');

const create = async (req, res) => {
    try {
      const { displayName, email, password } = req.body;
      const createdUser = await createUser({ displayName, email, password });
      return res.status(201).json({ token: createdUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  module.exports = { 
    create,
 };