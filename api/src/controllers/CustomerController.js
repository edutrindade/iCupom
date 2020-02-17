const Customer = require('../models/Customer');
const Category = require('../models/Category');

module.exports = {
  async index(req, res) {
    const customers = await Customer.findAll();
    return res.json(customers);
  },
  
  async store(req, res) {
    const { name, photo, type, cpf, cnpj, status, phone, whatsapp, email, category_id } = req.body;
    
    const category = await Category.findByPk(category_id);

    if(!category) {
      return res.status(400).json({error: 'Categoria não encontrada.'});
    }

    const customer = await Customer.create({ name, photo, type, cpf, cnpj, status, phone, whatsapp, email, category_id });
    return res.json(customer);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, photo, type, cpf, cnpj, status, phone, whatsapp, email, category_id } = req.body;
    const customer = await Customer.findByPk(id);

    if(!customer) {
      return res.status(400).json({error: 'Cliente não encontrado.'});
    }

    const category = await Category.findByPk(category_id);

    if(!category) {
      return res.status(400).json({error: 'Categoria não encontrada.'});
    }
    
    await customer.update({ name, photo, type, cpf, cnpj, status, phone, whatsapp, email, category_id });
    return res.json(customer);
  },

  async delete(req, res) {
    const { id } = req.params;
    const customer = await Customer.findByPk(id);

    if(!customer) { 
      return res.status(400).json({error: 'Cliente não encontrado.'});
    }

    await customer.destroy();
    return res.json();
  }
};