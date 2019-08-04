'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Wine extends Model {
  sales () {
    return this.belongsToMany('App/Models/Sale')
      .withPivot(['quantity'])
  }
}

module.exports = Wine
