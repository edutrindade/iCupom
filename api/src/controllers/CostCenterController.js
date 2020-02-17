const Cost = require('../models/Cost');

module.exports = {
  async index(req, res) {
    const costs = await Cost.findAll({order: ['code']});
    return res.json(costs);
  },
  
  async store(req, res) {
    const { code, type, description } = req.body;
    const cost = await Cost.create({ code, type, description });
    return res.json(cost);
  },

  async update(req, res) {
    const { id } = req.params;
    const { type, description } = req.body;
    const cost = await Cost.findByPk(id);

    if(!cost) {
      return res.status(400).json({Erro: 'Plano de Contas não encontrado.'});
    }
    
    await cost.update({ type, description });
    return res.json(cost);
  },

  async delete(req, res) {
    const { id } = req.params;
    const cost = await Cost.findByPk(id);

    if(!cost) { 
      return res.status(400).json({Erro: 'Plano de Contas não encontrado.'});
    }

    await cost.destroy();
    return res.json();
  }
};