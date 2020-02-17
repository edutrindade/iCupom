const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Category = require('../models/Category');
const Customer = require('../models/Customer');
const Address = require('../models/Address');
const Package = require('../models/Package');
const Contract = require('../models/Contract');
const Cost = require('../models/Cost');
const Movement = require('../models/Movement');

const connection = new Sequelize(dbConfig);

User.init(connection);
Category.init(connection);
Customer.init(connection);
Address.init(connection);
Package.init(connection);
Contract.init(connection);
Cost.init(connection);
Movement.init(connection);

Address.associate(connection.models);
Customer.associate(connection.models);
Category.associate(connection.models);

module.exports = connection;