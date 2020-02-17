const { Model, DataTypes } = require('sequelize');

class Contract extends Model {
  static init(connection) {
    super.init({
      customer_id: DataTypes.INTEGER,
      package_id: DataTypes.INTEGER,
      lack: DataTypes.INTEGER,
    }, {
      sequelize: connection
    })
  }

  /*static associate(models) {
    this.hasMany(models.Package, {foreignKey: 'contract_id', as: 'packages'});
  }

 /* static associate(models) {
    this.hasMany(models.Customer, {foreignKey: 'contract_id', as: 'customers'});
  } Essa associação ativa implica no contract_id em customer

  /*static associate(models) {
    this.hasOne(models.Package, {foreignKey: 'contract_id', as: 'package'});
  }*/
}

module.exports = Contract;