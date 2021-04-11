const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')

//Initialize App
const app = express()

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

//Routes
const productRoutes = require('./routes/product')
const orderRoutes = require('./routes/order')

//Routes middleware
app.use('/', productRoutes)
app.use('/', orderRoutes)

//Connect Database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Connected to mongoDB...'))
  .catch(err => console.error(err))

//Initialize Server
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
