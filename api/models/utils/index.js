'use strict';

var _ = require('lodash')
  , Company = require('../company');

module.exports = {
  companies: {
    format: function (company) {
      return _.pick(company, 'name', 'slug', 'orderStates', 'active');
    },
    formatForUpdate: function (body, company) {
      body = _.pick(body, 'name', 'orderStates', 'active');
      _.merge(company, body);
      delete company._id;
      return company;
    }
  }
}