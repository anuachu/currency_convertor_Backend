create DATABASE currency_convertor_db;
\c currency_convertor_db

CREATE TABLE creditcard(
  id SERIAL PRIMARY KEY,
  cardnumber BIGINT,
  cardholdername TEXT,
  cardexpirationdate BIGINT,
  cardcvv BIGINT,
  cardtype TEXT
);

INSERT INTO creditcard(cardnumber,cardholdername,cardexpirationdate,cardcvv,cardtype)VALUES 
(4000808056789080, 'Anusha Mohan',12/20,677,'VISA');