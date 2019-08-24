const db = require('mongoose');
require('mongoose-currency').loadType(db);

const { Currency } = db.Types;

db.connect('mongodb://localhost:27017/ontarget', { useNewUrlParser: true });

db.connection.on('connected', () => {
  // eslint-disable-next-line no-console
  console.log('connected to MongoDB');
});

db.connection.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.log('Error occurred: ', err);
});

/*
  Schema Definition
*/
const reviewSchema = db.Schema({
  rating: Number,
});

const productSchema = db.Schema({
  productId: Number,
  name: String,
  price: { type: Currency },
  size: [String],
  color: {},
  reviews: [reviewSchema],
});

const inventorySchema = db.Schema({
  productId: Number,
  size: String,
  color: String,
  storeId: Number,
  quantity: Number,
});

const locationSchema = db.Schema({
  storeId: Number,
  zipCode: Number,
  name: String,
});

/*
  Model Definition
*/
const Products = db.model('products', productSchema);
const Inventory = db.model('inventory', inventorySchema, 'inventory');
const Locations = db.model('locations', locationSchema);

/*
  Function Definitions
*/

const getProduct = (productId) => new Promise((resolve, reject) => {
  Products.find({ productId })
    .then((product) => {
      resolve(product);
    })
    .catch((err) => {
      reject(err);
    });
});

const getQuantity = (productId, color, size, storeId) => new Promise((resolve, reject) => {
  // eslint-disable-next-line object-curly-newline
  Inventory.find({ productId, color, size, storeId })
    .then((result) => {
      resolve(result[0].quantity);
    })
    .catch((err) => {
      reject(err);
    });
});

const getZipCode = (storeId) => new Promise((resolve, reject) => {
  Locations.find({ storeId })
    .then((result) => {
      resolve(result[0].zipCode);
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports.getProduct = getProduct;
module.exports.getQuantity = getQuantity;
module.exports.getZipCode = getZipCode;
