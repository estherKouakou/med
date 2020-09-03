'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpecialitiesSchema extends Schema {
  up () {
    this.create('specialities', (table) => {
      table.increments()

      table.string('name')
      table.string('code')
      table.string('image')
      table.integer('user_id')

      table.timestamps()
    })
  }

  down () {
    this.drop('specialities')
  }
}

module.exports = SpecialitiesSchema
