'use strict';

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId
  ;

var OrderSchema = new Schema({
  company: {type: ObjectId, ref: 'Company' },
  customer: {type: ObjectId, ref: 'Orders' },
  date: { type: Date },
  dueDate: { type: Date },
  status: { type: String, lowercase: true },
  transactionId: { type: String },
  items: [
    {

    }
  ],
  discountAmount: {type: Number},
  total: {type: Number }
});

var Order = mongoose.model('Order', OrderSchema);

module.exports = Order;