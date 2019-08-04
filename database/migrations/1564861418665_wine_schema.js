'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WineSchema extends Schema {
  up () {
    this.create('wines', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('description')
      table.string('type').notNullable()
      table.integer('size').notNullable()
      table.double('price').notNullable()
      table.integer('available').notNullable()
      table.text('avatar')
      table.timestamps()
    })
  }

  down () {
    this.drop('wines')
  }
}

module.exports = WineSchema
