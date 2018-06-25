'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var productIds = new Schema({
    ID: {
      type: Number,
      required: 'Please provide the ID of the product'
    },
    name: {
      type: String,
      required: 'Please provide the name'
    },
    shortDescription: {
      type: String,
      required: 'Please provide the short descriotion'
    },
    Price: {
      type: String,
      required: 'Please provide the price'
    }
});

module.exports = mongoose.model('ProductIds', productIds);