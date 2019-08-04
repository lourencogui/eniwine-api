'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SaleWineSchema extends Schema {
  up () {
    this.create('sale_wine', (table) => {
      table.increments()
      table
        .integer('sale_id')
        .unsigned()
        .references('id')
        .inTable('sales')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .notNullable()
      table
        .integer('wine_id')
        .unsigned()
        .references('id')
        .inTable('wines')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .notNullable()
      table.integer('quantity').notNullable()
    })
  }

  down () {
    this.drop('sale_wine')
  }
}

module.exports = SaleWineSchema
