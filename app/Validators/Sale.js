'use strict'

const Antl = use('Antl')

class Sale {
  get validateAll () {
    return true
  }

  // TODO: VALIDAR PROPS DE CADA ITEM DO ARRAY
  get rules () {
    return {
      wines: 'array'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Sale
