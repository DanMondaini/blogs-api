require('dotenv/config');
const jwt = require('jsonwebtoken');
const { userLogin } = require('../services/user.service.js');

const secret = process.env.JWT_SECRET;

const isBodyValid = (email, password) => email && password;

const userValidation = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await userLogin({ email, password });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' }); 
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { userEmail: user.email } }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { userValidation };

// para realização das funções com JWT, recorri ao course para estudar e ver a melhor forma de implementação do código - link: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/85fd2ed3-f6cc-4789-8990-7f5fe827422c/lesson/71107d81-f5bd-44ac-8bfb-5d5b0908cb0e  