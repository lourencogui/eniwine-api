'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.group(() => {
  Route.resource('wines', 'WineController').apiOnly()
  Route.resource('sales', 'SaleController').apiOnly()
}).middleware(['auth'])
