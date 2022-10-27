require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const tokenCreator = ({ id, displayName, email, image }) => {
    const tokens = {
        displayName,
        id,
        email,
        image,
    };

    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };
  
    const token = jwt.sign(tokens, secret, jwtConfig);

    return token;
    };

module.exports = { tokenCreator };