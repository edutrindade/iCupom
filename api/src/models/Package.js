const { Model, DataTypes } = require('sequelize');

class Package extends Model {
  static init(connection) {
    super.init({
      description: DataTypes.STRING,
      price: DataTypes.STRING,
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.belongsTo(models.Contract, {foreignKey: 'contract_id', as: 'contract'});
  }
}

module.exports = Package;