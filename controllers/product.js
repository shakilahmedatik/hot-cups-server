const Product = require('../models/product')

//Add Product
exports.create = (req, res) => {
  const newProduct = req.body
  const product = new Product(newProduct)
  product.save(function (err) {
    if (err) return console.log(err)
    // saved!
    console.log('Product Saved')
  })
}

//Get All Product
exports.list = (req, res) => {
  Product.find().exec((err, products) => {
    if (err) {
      return res.status(400).json({
        error: 'Products not found',
      })
    }
    res.json(products)
  })
}

//Get Single Product
exports.read = async (req, res) => {
  const id = req.params.id
  await Product.findById(id).exec((err, product) => {
    if (err) {
      return res.status(400).json({
        error: 'Products not found',
      })
    }
    res.json(product)
  })
}

//Update Product
exports.remove = async (req, res) => {
  const id = req.params.id

  await Product.findByIdAndRemove(id, () => {
    res.status(200).send('Product Deleted Successfully')
  })
}

//Delete Product
exports.update = async (req, res) => {
  const id = req.params.id
  const UpdatedProduct = req.body
  await Product.findByIdAndUpdate(id, UpdatedProduct).exec(err => {
    if (err) {
      return res.status(400).json({
        error: 'Products not found',
      })
    }
    res.status(200).send('Product Updated Successfully')
  })
}
