const express = require('express')
const router = express.Router()

const { create, listOrders } = require('../controllers/order')

router.post('/addOrder', create)

router.get('/listOrder', listOrders)

module.exports = router
