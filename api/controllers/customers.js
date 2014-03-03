'use strict';

var Customer = require('../../api/models/customer'),
  Errors = require('../../config/errors');

exports.all = function (req, res, next) {
  Customer.find({ company: req.company._id, active: true }, function (err, customers) {
    if (err) next(err);
    else {
      res.send(200, customers);
    }
  });


};