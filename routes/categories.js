var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Category = require('../models/category');

router.post('/add', function (req, res, next) {

});

router.get('/list', function (req, res, next) {
    Category.find({})
        .exec(function (err, categories) {
            if (err) {
                console.log(err)
            } else {
                res.json({ categories: categories });
            }
        });
});

module.exports = router;