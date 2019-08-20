'use strict'

// const Mail = use('Mail')
const SaleHook = exports = module.exports = {}

SaleHook.sendSaleEmail = async (saleInstance) => {
  // const wines = await saleInstance.wines().fetch()
  // const user = await saleInstance.user().fetch()

  // console.log({ wines, user })
  // // ENVIA EMAIL
  // await Mail.send(['emails.new_sale'],
  //   { wines: wines.rows, user, saleInstance }
  //   , message => {
  //     message
  //       .to(user.email)
  //       .from('eniwine@gmail.com', 'Eniwine')
  //       .subject('Sua compra')
  //   })
}
