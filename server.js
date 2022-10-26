const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;

const logger = require('./middlewares/logger')

const currencyController = require('./controllers/currency_convertor.js')


app.listen(PORT,
  () => console.log(`server listening to port ${PORT}`)
)

app.use(logger)



app.use(express.json())

app.use('/api/currency', currencyController)