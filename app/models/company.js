'use strict';
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
  ;

var CompanySchema = new Schema({
  name: {type: String, required: true, unique: true},
  slug: {type: String, required: true },
  token: {type: String, required: true },
  orderStates: [
    {
      name: String,
      nextState: String,
      active: Boolean
    }
  ],
  active: {type: Boolean, default: true }
});

var Company = mongoose.model('Company', CompanySchema);

module.exports = Company;