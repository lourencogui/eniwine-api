'use strict'

const Route = use('Route')

// USER
Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')

// PASSWORD
Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update').validator('ForgotPassword')

// WINE
Route.group(() => {
  Route.resource('wines', 'WineController').apiOnly().validator(new Map([
    [['wines.store'], ['Wine']]
  ]))
  Route.resource('sales', 'SaleController').apiOnly().validator(new Map([
    [['sales.store'], ['Sale']]
  ]))
}).middleware(['auth'])
