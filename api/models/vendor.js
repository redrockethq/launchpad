'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var vendorSchema = new Schema({
  name: {type: String, required: true, uniqueness: true },
  accountNumber: {type: String},
  phones: [
    {
      number: String,
      kind: String,
      isDefault: { type: Boolean, default: true }
    }
  ],
  email: {type: String, lowercase: true},
  active: {type: Boolean}
});

var Vendor = mongoose.model('Vendor', vendorSchema);
module.exports = Vendor;