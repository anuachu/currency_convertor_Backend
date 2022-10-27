const db = require('../db/db')

const Credit = {
  findAll: () => {
    const sql = 'SELECT * FROM creditcard'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },
  create: (cardnumber,cardholdername,cardexpirationdate,cardcvv,cardtype) => {
    const sql = `INSERT INTO creditcard(cardnumber,cardholdername,cardexpirationdate,cardcvv,cardtype)VALUES($1, $2, $3, $4, $5)
    RETURNING *`

    return db
      .query(sql, [cardnumber,cardholdername,cardexpirationdate,cardcvv,cardtype])
      .then(dbRes => dbRes.rows[0])
  },
  update: (balance) => {
    const sql = `Update creditcard SET balance = $3 Where id = $2 
    RETURNING *`

    return db
      .query(sql, [balance])
      .then(dbRes => dbRes.rows[0])
  }
}

module.exports = Credit