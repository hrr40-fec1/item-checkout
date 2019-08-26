const Products = require('../models/products.js');
const Inventory = require('../models/inventory.js');
const Locations = require('../models/locations.js');

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
