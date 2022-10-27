const { User } = require('../models');
 
const userValidationMiddleware = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  const regex = /\S+@\S+\.\S+/;

  if (displayName.length < 8) {
      return res.status(400).json({ 
        message: '"displayName" length must be at least 8 characters long' });
}
  if (!regex.test(email)) {
     return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
      return res.status(400).json({ 
        message: '"password" length must be at least 6 characters long' });
    }
  
  const alreadyRegistered = await User.findOne({ where: { email } });
  
  if (alreadyRegistered) { 
        return res.status(409).json({ message: 'User already registered' });
 }
    next();
};

  module.exports = { userValidationMiddleware };
// ao realizar esse requisito, lembrei do exercicio que realizei no course e o usei de base - atividades do dia 06  "Dia 06: Atividades + Projeto - Talker Manager"