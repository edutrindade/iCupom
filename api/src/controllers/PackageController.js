const Package = require('../models/Package');

module.exports = {
  async index(req, res) {
    const packages = await Package.findAll();
    return res.json(packages);
  },
  
  async store(req, res) {
    const { description, price } = req.body;
    const package = await Package.create({ description, price });
    return res.json(package);
  },

  async update(req, res) {
    const { id } = req.params;
    const { description, price } = req.body;
    const package = await Package.findByPk(id);

    if(!package) {
      return res.status(400).json({error: 'Pacote não encontrado.'});
    }
    
    await package.update({ description, price });
    return res.json(package);
  },

  async delete(req, res) {
    const { id } = req.params;
    const package = await Package.findByPk(id);

    if(!package) { 
      return res.status(400).json({error: 'Pacote não encontrado.'});
    }

    await package.destroy();
    return res.json();
  }
};