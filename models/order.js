const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Schema

const OrderSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    quantity: Number,
    userName: String,
    email: String,
    uid: String,
  },
  { timestamps: true }
)

const Order = mongoose.model('Order', OrderSchema)

module.exports = { Order }
