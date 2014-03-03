'use strict';

var Orders = require('../../api/models/order'),
  Errors = require('../../config/errors');

exports.all = function (req, res, next) {
  Orders.find({ company: req.company._id, active: true }, function (err, orders) {
    if (err) next(err);
    else {
      res.send(200, orders);
    }
  });
};