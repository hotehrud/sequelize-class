'use strict'

import Sequelize from 'sequelize'

export default class User extends Sequelize.Model {
  static init(sequelize) {
    let options = {}
    options.sequelize = sequelize
    options.indexes = [
      {
        unique: true,
        fields: ['userName']
      }
    ]

    // init(attributes, options)
    // Using additional options like getterMethods, setterMethods, indexes etc
    return super.init({
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    }, options)
  }

  static associate(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    this.hasMany(models.Post, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })

    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    this.hasMany(models.Comment, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  }
}
