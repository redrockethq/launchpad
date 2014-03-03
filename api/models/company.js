'use strict';
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  hat = require('hat'),
  sluggify = require('slug');

var companySchema = new Schema({
  name: { type: String, required: true, unique: true},
  slug: { type: String, lowercase: true },
  token: { type: String, required: true, default: hat() },
  orderStates: [
    {
      name: { type: String, required: true, unique: true  },
      nextState: { type: String },
      active: { type: String, default: true }
    }
  ],
  active: { type: Boolean, default: true }
});

companySchema.pre('save', function (next) {
  this.slug = sluggify(this.name);
  next();
});

var Company = mongoose.model('Company', companySchema);

module.exports = Company;