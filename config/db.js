'use strict';
var mongoose = require('mongoose')
  , nconf = require('nconf').env().file({ file: 'config/settings.json'});

var dbUrl = nconf.get('db');
mongoose.connect(dbUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log('Successfully connected to ' + dbUrl);
});

module.exports = db;