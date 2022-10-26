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

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}