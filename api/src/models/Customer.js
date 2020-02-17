const { Model, DataTypes } = require('sequelize');

class Customer extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      photo: DataTypes.STRING,
      type: DataTypes.STRING,
      cpf: DataTypes.STRING,
      cnpj: DataTypes.STRING,
      status: DataTypes.STRING,
      phone: DataTypes.STRING,
      whatsapp: DataTypes.STRING,
      email: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.belongsTo(models.Category, {foreignKey: 'category_id', as: 'category'});
  }

  static associate(models) {
    this.hasMany(models.Address, {foreignKey: 'customer_id', as: 'addresses'});
  }

  static associate(models) {
    this.hasOne(models.Contract, {foreignKey: 'customer_id', as: 'contract'});
  }
}

module.exports = Customer;