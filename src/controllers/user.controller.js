const { User } = require('../models');
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

  const allUsers = { attributes: { exclude: ['password'] } };

  const getAll = async (_req, res) => res.status(200).json(await User.findAll(allUsers));
  
  const getById = async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({ 
        attributes: ['id', 'displayName', 'email', 'image'],
        where: { id },
    });
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
};

  module.exports = { 
    create,
    getAll,
    getById,
 };
