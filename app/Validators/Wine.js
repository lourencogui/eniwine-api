'use strict'
const Antl = use('Antl')

class Wine {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required|unique:wines',
      type: 'required',
      size: 'required|integer',
      price: 'required|number',
      available: 'required|integer'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Wine
