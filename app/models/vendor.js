'use strict';

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
  ;

var VendorSchema = new Schema({
  name: {type: String, required: true, uniqueness: true },
  accountNumber: {type: String},
  phones: [
    {
      number: String,
      kind: String,
      isDefault: Boolean
    }
  ],
  email: {type: String, lowercase: true},
  active: {type: Boolean}
});

var Vendor = mongoose.model('Vendor', VendorSchema);

module.exports = Vendor;