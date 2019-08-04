'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sale extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  wines () {
    return this.belongsToMany('App/Models/Wine')
      .withPivot(['quantity'])
  }
}

module.exports = Sale
