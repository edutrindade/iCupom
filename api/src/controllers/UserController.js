const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
  
  async store(req, res) {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password});
    return res.json(user);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const user = await User.findByPk(id);

    if(!user) {
      return res.status(400).json({error: 'Usuário não encontrado.'});
    }
    
    await user.update({ name, email, password});
    return res.json(user);
  },

  async delete(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if(!user) { 
      return res.status(400).json({error: 'Usuário não encontrado.'});
    }

    await user.destroy();
    return res.json();
  }
};