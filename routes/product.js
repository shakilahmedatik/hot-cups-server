const express = require('express')
const router = express.Router()

const { create, list, read, remove, update } = require('../controllers/product')

//Get All Product
router.get('/products', list)

//Get Single Product
router.get('/product/:id', read)

//Add Product
router.post('/addProduct', create)

//Update Product
router.put('/product/:id', update)

//Delete Product
router.delete('/product/:id', remove)

module.exports = router
