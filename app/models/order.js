'use strict';

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
  ;

var OrderSchema = new Schema({
  customer: {type: ObjectId, ref: 'Customer'},
  date: {type: Date},
  dueDate: {type: Date},
  status: {type: String},
  transactionId: {type: String},
  items: [
    {

    }
  ],
  discountAmount: {type: Number},
  total: {type: Number }
});

var Order = mongoose.model('Order', OrderSchema);

module.exports = Order;