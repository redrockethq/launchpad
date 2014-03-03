'use strict';

var Company = require('../models/company'),
  modelUtils = require('../models/utils'),
  errors = require('../../config/errors'),
  _ = require('lodash');


exports.get = function (req, res, next) {
  var slug = req.params.slug;
  Company.findOne({ slug: slug, active: true },
    function (err, company) {
      if (err) return next(err);
      if (!company) {
        next(new errors.NotFoundError());
      } else {
        res.send(200, modelUtils.companies.format(company));
      }
    });
};

exports.post = function (req, res, next) {
  var company = new Company(req.body);
  company.save(function (err) {
    if (err) next(err);
    else {
      res.send(201, modelUtils.companies.format(company));
    }
  });
};

exports.put = function (req, res, next) {
  var slug = req.params.slug;
  Company.findOne({ slug: slug, active: true },
    function (err, company) {
      if (err) return next(err);
      if (!company) {
        next(new errors.NotFoundError());
      } else {
        if (req.company._id.toString() === company._id.toString()) {
          modelUtils.companies.formatForUpdate(req.body, company);
          company.save(function (err) {
            if (err) next(err);
            else {
              res.send(200, modelUtils.companies.format(company));
            }
          })
        } else {
          next(new errors.NotAuthorizedError());
        }
      }
    });
};

exports.remove = function (req, res) {

};