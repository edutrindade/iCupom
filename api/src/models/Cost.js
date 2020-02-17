const { Model, DataTypes } = require('sequelize');

class Cost extends Model {
  static init(connection) {
    super.init({
      code: DataTypes.STRING,
      type: DataTypes.STRING,
      description: DataTypes.STRING,
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.belongsTo(models.Movement, {foreignKey: 'movement_id', as: 'movement'});
  }
}

module.exports = Cost;