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

  Credit
    .create(cardnumber, cardholdername,cardexpirationdate,cardcvv,cardtype)
    .then(creditcard => res.json(creditcard))
})

module.exports = router