const express = require('express');
const UserController = require('./controllers/UserController');
const CategoryController = require('./controllers/CategoryController');
const CustomerController = require('./controllers/CustomerController');
const AddressController = require('./controllers/AddressController');
const PackageController = require('./controllers/PackageController');
const ContractController = require('./controllers/ContractController');
const CostCenterController = require('./controllers/CostCenterController');
const MovementController = require('./controllers/MovementController');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({hello: 'Server is running!'});
});

// CRUD DE USUÁRIOS
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

// CRUD DE CATEGORIAS
routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.delete);

// CRUD DE CLIENTES
routes.get('/customers', CustomerController.index);
routes.post('/customers', CustomerController.store);
routes.put('/customers/:id', CustomerController.update);
routes.delete('/customers/:id', CustomerController.delete);

// CRUD DE ENDEREÇOS DE CLIENTES
routes.get('/customers/:customer_id/addresses', AddressController.index);
routes.post('/customers/:customer_id/addresses', AddressController.store);
routes.put('/customers/:customer_id/addresses/:id', AddressController.update);
routes.delete('/customers/:customer_id/addresses/:id', AddressController.delete);

// CRUD DE PACOTES
routes.get('/packages', PackageController.index);
routes.post('/packages', PackageController.store);
routes.put('/packages/:id', PackageController.update);
routes.delete('/packages/:id', PackageController.delete);

// CRUD DE CONTRATOS: CLIENTE + PACOTE
routes.get('/contracts', ContractController.index);
routes.post('/contracts', ContractController.store);
routes.put('/contracts/:id', ContractController.update);
routes.delete('/contracts/:id', ContractController.delete);

// CRUD DE CENTRO DE CUSTOS / PLANO DE CONTAS
routes.get('/costs', CostCenterController.index);
routes.post('/costs', CostCenterController.store);
routes.put('/costs/:id', CostCenterController.update);
routes.delete('/costs/:id', CostCenterController.delete);

// CRUD DE MOVIMENTOS FINANCEIROS COM CENTRO DE CUSTO
routes.get('/movements', MovementController.index);
routes.post('/movements', MovementController.store);
routes.put('/movements/:id', MovementController.update);
routes.delete('/movements/:id', MovementController.delete);

module.exports = routes;