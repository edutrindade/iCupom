const Contract = require('../models/Contract');
const Customer = require('../models/Customer');
const Package = require('../models/Package');

module.exports = {
  async index(req, res) {
    const contracts = await Contract.findAll();
    return res.json(contracts);
  },
  
  async store(req, res) {
    const { customer_id, package_id, lack } = req.body;

    const customer = await Customer.findByPk(customer_id);

    if(!customer) {
      return res.status(400).json({error: 'Cliente não encontrado.'});
    }

    const package = await Package.findByPk(package_id);

    if(!package) {
      return res.status(400).json({error: 'Pacote não encontrado.'});
    }

    const customer_contract = await Contract.findOne({
      where: {
        customer_id: customer_id
      }
    })

    if(customer_contract) {
      return res.status(400).json({Erro: 'Cliente já possui contrato.'});
    } 
    else {
      const contract = await Contract.create({ customer_id, package_id, lack });
      return res.json(contract);
    }

  },

  async update(req, res) {
    const { id } = req.params;
    const { package_id, lack } = req.body;
    
    const contract = await Contract.findByPk(id);

    if(!contract) {
      return res.status(400).json({error: 'Contrato não encontrado.'});
    }
    
    await contract.update({ package_id, lack });
    return res.json(contract);
  },

  async delete(req, res) {
    const { id } = req.params;
    const contract = await Contract.findByPk(id);

    if(!contract) { 
      return res.status(400).json({Erro: 'Contrato não encontrado.'});
    }

    await contract.destroy();
    return res.json();
  }
};