'use strict';

var Company = require('../api/models/company'),
  errors = require('../config/errors');

exports.verifyToken = function (req, res, next) {
  var token = req.headers['x-company-auth'];
  if (!token) {
    res.send(401, "Token required");
  } else {
    Company.findOne({ token: token, active: true }, function (err, company) {
      if (err) next(err);
      else {
        if (!company) {
          res.send(401, "Token not found");
        } else {
          req.company = company;
          next();
        }
      }
    });
  }
};


exports.logErrors = function (err, req, res, next) {
  console.log(err);
  next(err);
};

exports.handleLaunchpadError = function (err, req, res, next) {
  if (err instanceof errors.LaunchpadError) {
    var status = err.status;
    delete err.status;
    res.send(status, { errors: [err]});
  } else {
    next(err);
  }
};

exports.notFound = function (err, req, res, next) {
  if (err instanceof errors.NotFoundError) {
    res.send(404, { errors: [err] });
  } else {
    next(err);
  }
};

exports.errorHandler = function (err, req, res, next) {
  res.send(500, {
    error: [
      {
        error: {
          message: err.message,
          stack: err.stack
        }
      }
    ] })
};