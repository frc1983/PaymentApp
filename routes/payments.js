var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Payment = require('../models/payment');
var Category = require('../models/category');

router.post('/save', function (req, res, next) {
  var payment = new Payment({
    category_id: req.body.category_id,
    includedAt: Date.now(),
    value: req.body.value
  });

  payment.save(function (err) {
    if (err) {
      console.log(err)
    } else {
      res.json({ inserted: true, payment: payment });
    }
  });
});

router.get('/list', function (req, res, next) {
  Payment.find({ category_id: req.query.category })
    .populate({ path: 'category_id', select: ['name', 'id'] })
    .exec(function (err, payments) {
      if (err) {
        console.log(err);
      } else {
        res.json({ payments: payments });
      }
    });
});

router.get('/', function (req, res, next) {
  Payment.find({})
    .populate({ path: 'category_id', select: ['name', 'id'] })
    .exec(function (err, payments) {
      if (err) {
        console.log(err)
      } else {
        res.render('payments-list', { title: 'Payments', itens: payments });
      }
    });
});

module.exports = router;