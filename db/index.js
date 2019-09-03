const Products = require('../models/products.js');
const Inventory = require('../models/inventory.js');
const Locations = require('../models/locations.js');

/*
  Function Definitions
*/
const getProduct = (productId) => new Promise((resolve, reject) => {
  Products.find({ productId })
    .then((product) => {
      resolve(product.length ? product[0] : 'Product Does Not Exist');
    })
    .catch((err) => {
      reject(err);
    });
});

const getQuantity = (productId, color, size, storeId) => new Promise((resolve, reject) => {
  // eslint-disable-next-line object-curly-newline
  Inventory.find({ productId, color, size, storeId })
    .then((result) => {
      resolve(result.length ? result[0].quantity : 0);
    })
    .catch((err) => {
      reject(err);
    });
});

const getLocation = (storeId) => new Promise((resolve, reject) => {
  Locations.find({ storeId })
    .then((result) => {
      resolve(result.length ? result[0] : 'Store Does Not Exist');
    })
    .catch((err) => {
      reject(err);
    });
});

const getLocationZip = (zipCode) => new Promise((resolve, reject) => {
  Locations.find({ zipCode })
    .then((result) => {
      resolve(result.length ? result[0] : 'Store Does Not Exist');
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports.getProduct = getProduct;
module.exports.getQuantity = getQuantity;
module.exports.getLocation = getLocation;
module.exports.getLocationZip = getLocationZip;
