const jwt = require('jsonwebtoken');
const { User } = require('../models');

const userEmail = async (email) => {
    const user = await User.findOne({ where: { email } });

    return user;
  };

const userLogin = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });

    return user;
};

const createUser = async ({ displayName, email, password }) => {
    await User.create({
        displayName,
        email,
        password,
    });

    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };

      const { JWT_SECRET } = process.env;

      const token = jwt.sign({ email }, JWT_SECRET, jwtConfig);

      return token;
};
module.exports = { 
    userLogin,
    userEmail,
    createUser,
};