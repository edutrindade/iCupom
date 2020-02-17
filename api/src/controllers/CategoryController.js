const Category = require('../models/Category');

module.exports = {
  async index(req, res) {
    const categories = await Category.findAll();
    if(categories.length == []) {
      return res.status(200).json({Info: 'Não existem categorias cadastradas.'});
    }
    return res.json(categories);
  },
  
  async store(req, res) {
    const { name, photo } = req.body;
    const category = await Category.create({ name, photo});
    return res.json(category);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, photo } = req.body;
    const category = await Category.findByPk(id);

    if(!category) {
      return res.status(400).json({error: 'Categoria não encontrada.'});
    }
    
    await category.update({ name, photo});
    return res.json(category);
  },

  async delete(req, res) {
    const { id } = req.params;
    const category = await Category.findByPk(id);

    if(!category) { 
      return res.status(400).json({error: 'Categoria não encontrada.'});
    }

    await category.destroy();
    return res.json();
  }
};