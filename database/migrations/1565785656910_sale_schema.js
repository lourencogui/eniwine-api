'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SaleSchema extends Schema {
  up () {
    this.table('sales', (table) => {
      // alter table
      table.float('total')
    })
  }

  down () {
    this.table('sales', (table) => {
      // reverse alternations
      table.dropColumn('total')
    })
  }
}

module.exports = SaleSchema
