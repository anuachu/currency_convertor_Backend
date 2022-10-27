const express = require('express')
const router = express.Router()

const Credit = require('../models/credit')

router.get('/', (req,res) => {
  Credit
    .findAll()
    .then(creditcard => res.json(creditcard))
})

router.post('/',(req, res) => {
  const cardnumber = req.body.cardnumber
  const cardholdername = req.body.cardholdername
  const cardexpirationdate = req.body.cardexpirationdate
  const cardcvv = req.body.cardcvv
  const cardtype = req.body.cardtype
  const balance = req.body.balance

  Credit
    .create(cardnumber,cardholdername,cardexpirationdate,cardcvv,cardtype,balance)
    .then(creditcard => res.json(creditcard))
})

// router.put('/api/currency/:id', (req, res) => {
//   const balance = req.body.balance

//   Credit
//     .update(req.params.id,balance)
//     .then(updatedBalance => res.json(updatedBalance))
// })

module.exports = router