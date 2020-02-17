const { Model, DataTypes } = require('sequelize');

class Address extends Model {
  static init(connection) {
    super.init({
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
      complement: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
      city: DataTypes.STRING,
      zipcode: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.belongsTo(models.Customer, {foreignKey: 'customer_id', as: 'customer'});
  }
}

module.exports = Address;