'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with sales
 */
const Sale = use('App/Models/Sale')
const Wine = use('App/Models/Wine')
const Kue = use('Kue')
const Job = use('App/Jobs/SendNewSaleEmail')
class SaleController {
  /**
   * Show a list of all sales.
   * GET sales
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Create/save a new sale.
   * POST sales
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const data = request.input('wines')
    const { user } = auth
    let total = 0
    // VALIDA SE POSSUI ESTOQUE
    for (let i = 0; i < data.length; i++) {
      const { id, quantity } = data[i]
      const wine = await Wine.findByOrFail('id', id)
      if (wine.available < quantity) return response.json({ message: 'Não possui estoque' })

      total += (quantity * wine.price)
    }

    const sale = await Sale.create({ user_id: auth.user.id, total })

    // RELACIONA OS PRODUTOS COM A COMPRA
    for (let i = 0; i < data.length; i++) {
      const { id, quantity } = data[i]
      await sale.wines().attach([id], (row) => {
        row.quantity = quantity
      })
    }

    // ATUALIZANDO QUANTIDADE DISPONIVEL
    for (let i = 0; i < data.length; i++) {
      const { id, quantity } = data[i]
      const wine = await Wine.findByOrFail('id', id)

      const newQuantity = wine.available - quantity

      wine.merge({ available: newQuantity })
      await wine.save()
    }

    const wines = await sale.wines().fetch()
    // console.log(wines.rows)
    Kue.dispatch(Job.key, { wines, user, sale }, { attempts: 3 })

    return response.json({ success: true })
  }

  /**
   * Display a single sale.
   * GET sales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update sale details.
   * PUT or PATCH sales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a sale with id.
   * DELETE sales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = SaleController
