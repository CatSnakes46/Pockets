const db = require('../models/transactionsModel');
const transactionController = {};

//MIDDLEWARE TO ADD A TRANSACTION TO DB
transactionController.addTransaction = (req, res, next) => {
  const query =
    'INSERT INTO public.transactions (name, amount, date, category_id) \
    VALUES ($1, $2, $3, $4) RETURNING *';
  const params = [
    req.body.name,
    req.body.amount,
    req.body.date,
    req.body.category_id,
  ];

  db.query(query, params)
    .then((data) => {
      return next();
    })
    .catch((err) => {
      console.log('query error', err);
      return next(err);
    });
};

//MIDDLEWARE FOR RETRIEVING TRANSACTION DATA FOR FRONTEND DISPLAY
transactionController.getTransaction = (req, res, next) => {
  const query =
    'SELECT transactions.*, categories.category as category \
    FROM transactions \
    LEFT OUTER JOIN categories ON categories._id = transactions.category_id';

  db.query(query)
    .then((data) => {
      res.locals.data = data.rows;
      return next();
    })
    .catch((err) => {
      console.log('get query error', err);
      return next(err);
    });
};

//MIDDLEWARE FOR DELETING A TRANSACTION
transactionController.deleteTransaction = (req, res, next) => {
  const query = 
    'DELETE FROM transactions \
    WHERE transaction_id=$1';
  const params = [req.body.id];

  db.query(query, params)
    .then((data) => {
      // console.log(data)
      return next();
    })
    .catch((err) => {
      console.log('delete error', err);
      return next(err);
    });
};

//MIDDLEWARE FOR CALCULATING RUNNING TOTAL OF TRANSACTIONS
transactionController.getTotal = (req, res, next) => {
  const transactions = res.locals.data;
  let total = 0;

  transactions.forEach((obj) => {
    total += obj.amount;
  });

  res.locals.total = total;
  return next();
};

module.exports = transactionController;
