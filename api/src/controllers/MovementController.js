const Movement = require('../models/Movement');
const Cost = require('../models/Cost');

module.exports = {
  async index(req, res) {
    const movements = await Movement.findAll();
    return res.json(movements);
  },
  
  async store(req, res) {
    const { document, value, cost_id } = req.body;
    
    const cost = await Cost.findByPk(cost_id);

    if(!cost) {
      return res.status(400).json({error: 'Plano de contas não encontrado.'});
    }

    const movement = await Movement.create({ document, value, cost_id });
    return res.json(movement);
  },

  async update(req, res) {
    const { id } = req.params;
    const { document, value, cost_id } = req.body;
    const movement = await Movement.findByPk(id);

    if(!movement) {
      return res.status(400).json({error: 'Movimento não encontrado.'});
    }

    const cost = await Cost.findByPk(cost_id);

    if(!cost) {
      return res.status(400).json({error: 'Plano de contas não encontrado.'});
    }
    
    await movement.update({ document, value, cost_id });
    return res.json(movement);
  },

  async delete(req, res) {
    const { id } = req.params;
    const movement = await Movement.findByPk(id);

    if(!movement) { 
      return res.status(400).json({error: 'Movimento não encontrado.'});
    }

    await movement.destroy();
    return res.json();
  }
};