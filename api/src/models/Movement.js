const { Model, DataTypes } = require('sequelize');

class Movement extends Model {
  static init(connection) {
    super.init({
      document: DataTypes.STRING,
      value: DataTypes.NUMERIC(15,2),
      cost_id: DataTypes.INTEGER,
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.hasMany(models.Cost, {foreignKey: 'cost_id', as: 'movements'});
  }
}

module.exports = Movement;