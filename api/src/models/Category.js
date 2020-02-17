const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      photo: DataTypes.STRING,
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.hasMany(models.Customer, {foreignKey: 'category_id', as: 'categories'});
  }
}

module.exports = Category;