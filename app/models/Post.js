'use strict'

import Sequelize from 'sequelize'

export default class Post extends Sequelize.Model {
  static init(sequelize) {
    let options = {}
    options.sequelize = sequelize

    // init(attributes, options)
    // Using additional options like getterMethods, setterMethods, indexes etc
    return super.init({
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      textarea: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false
      },
    }, options)
  }

  static associate(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.Post);
    this.hasMany(models.Comment, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })

    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.Post);
    this.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  }
}