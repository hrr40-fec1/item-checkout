const db = require('../db/connection.js');

const locationSchema = db.Schema({
  storeId: Number,
  zipCode: Number,
  name: String,
});

const Locations = db.model('locations', locationSchema);

module.exports = Locations;
