const db = require('../db/connection.js');

const inventorySchema = db.Schema({
  productId: Number,
  size: String,
  color: String,
  storeId: Number,
  quantity: Number,
});

const Inventory = db.model('inventory', inventorySchema, 'inventory');

module.exports = Inventory;
