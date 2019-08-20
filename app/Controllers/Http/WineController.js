'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with wines
 */

const Wine = use('App/Models/Wine')
const Database = use('Database')

class WineController {
  /**
   * Show a list of all wines.
   * GET wines
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const wines = await Wine.all()

    return wines
  }

  /**
   * Create/save a new wine.
   * POST wines
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['name', 'type', 'description', 'size', 'price', 'available'])
    const trx = await Database.beginTransaction()

    const wine = await Wine.create(data, trx)
    await trx.commit()
    return wine
  }

  /**
   * Display a single wine.
   * GET wines/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update wine details.
   * PUT or PATCH wines/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a wine with id.
   * DELETE wines/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = WineController
