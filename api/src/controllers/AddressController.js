const Customer = require('../models/Customer');
const Address = require('../models/Address');

module.exports = {
  async index(req, res) {
    const { customer_id } = req.params;
    
    // SELECT PRIMARY KEY COM JOIN PARA ADDRESSES
    const customer = await Customer.findByPk(customer_id, {
      include: { association: 'addresses' }
    });

    if(!customer) {
      return res.status(400).json({error: 'Cliente não encontrado.'});
    }

    return res.json(customer);
  },
  
  async store(req, res) {
    const { customer_id } = req.params;
    const { street, number, complement, neighborhood, city, zipcode, state, country } = req.body;
    
    const customer = await Customer.findByPk(customer_id);

    if(!customer) {
      return res.status(400).json({error: 'Cliente não encontrado.'});
    }

    const address = await Address.create({ customer_id, street, number, complement, neighborhood, city, zipcode, state, country });
    return res.json(address);
  },

  async update(req, res) {
    const { customer_id } = req.params;
    const { id } = req.params;

    const { street, number, complement, neighborhood, city, zipcode, state, country } = req.body;
    
    const customer = await Customer.findByPk(customer_id);

    if(!customer) {
      return res.status(400).json({error: 'Cliente não encontrado.'});
    }
    
    const address = await Address.findByPk(id);

    if(!address) {
      return res.status(400).json({error: 'Endereço não encontrado.'});
    }
    
    await address.update({ street, number, complement, neighborhood, city, zipcode, state, country });
    return res.json(address);
  },

  async delete(req, res) {
    const { customer_id } = req.params;
    const { id } = req.params;
    
    const customer = await Customer.findByPk(customer_id);

    if(!customer) {
      return res.status(400).json({error: 'Cliente não encontrado.'});
    }

    const address = await Address.findByPk(id);

    if(!address) { 
      return res.status(400).json({error: 'Endereço não encontrado.'});
    }

    await address.destroy();
    return res.json();
  }
};