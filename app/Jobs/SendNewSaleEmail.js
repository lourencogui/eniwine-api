'use strict'
const Mail = use('Mail')

class SendNewSaleEmail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key () {
    return 'SendNewSaleEmail-job'
  }

  // This is where the work is done.
  async handle ({ wines, user, sale }) {
    // console.log(wines[0])
    console.log(`SendNewSaleEmail-job started key:${SendNewSaleEmail.key}`)

    await Mail.send(['emails.new_sale'],
      { wines, user, sale }
      , message => {
        message
          .to(user.email)
          .from('eniwine@gmail.com', 'Eniwine')
          .subject('Sua compra')
      })
  }
}

module.exports = SendNewSaleEmail
