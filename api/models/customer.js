'use strict';

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
  ;

var customerSchema = new Schema({
  company: { type: ObjectId, ref: 'Company' },
  name: { type: String, required: true, index: true },
  contacts: [
    {
      firstName: {type: String, required: true},
      lastName: {type: String, required: true},
      email: {type: String, required: true, lowercase: true, trim: true},
      phones: [
        {
          number: {type: String, required: true },
          kind: { type: String, required: true }
        }
      ]
    }
  ],
  addresses: [
    {
      address: String,
      city: String,
      state: String,
      zip: String,
      longitude: Number,
      latitude: Number,
      isDefault: { type: Boolean, default: true },
      isBilling: {type: Boolean, default: true },
      isShipping: {type: Boolean, default: true}
    }
  ],
  phones: [
    {
      number: {type: String, required: true },
      kind: { type: String, required: true }
    }
  ],
  website: {type: String, lowercase: true },
  description: String,
  keywords: [String],
  active: { type: Boolean, default: true }
});

var Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;