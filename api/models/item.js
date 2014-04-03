'use strict';
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.Types.ObjectId;

var itemSchema = new Schema({
  company: { type: ObjectId, ref: 'Company' },
  kind: { type: String, required: true },
  name: { type: String, required: true, index: true },
  description: String,
  color: { type: String, required: true },
  size: { type: String },
  retailPrice: { type: Number, min: 0 },
  options: Schema.Types.Mixed,
  vendors: [
    {
      type: ObjectId,
      ref: 'Vendor',
      code: { type: String, required: true },
      isPreferred: { type: Boolean, default: true }
    }
  ],
  active: { type: Boolean, default: true }
});

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;