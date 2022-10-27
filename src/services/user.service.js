const { User } = require('../models');

const userEmail = async (email) => {
    const user = await User.findOne({ where: { email } });

    return user;
  };

const userLogin = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });

    return user;
};

module.exports = { 
    userLogin,
    userEmail,
};