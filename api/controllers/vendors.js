'use strict';

var Vendor = require('../../api/models/vendor'),
  Errors = require('../../config/errors');

exports.all = function (req, res, next) {
  Vendor.find({ company: req.company._id, active: true }, function (err, orders) {
    if (err) next(err);
    else {
      res.send(200, orders);
    }
  });
};