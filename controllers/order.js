const { Order } = require('../models/order')
const { errorHandler } = require('../helpers/dbErrorHandler')

//Create Orders
exports.create = (req, res) => {
  const newOrder = req.body
  const order = new Order(newOrder)
  order.save((error, data) => {
    if (error) {
      return res.status(400).json({
        error: errorHandler(error),
      })
    }
    res.json(data)
  })
}

//Find & Filter Orders
exports.listOrders = (req, res) => {
  const id = req.query.id
  console.log(id)

  Order.find({ uid: id }).exec((err, Order) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(error),
      })
    }
    res.json(Order)
  })
}
