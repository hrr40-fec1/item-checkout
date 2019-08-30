const faker = require('faker');
const db = require('./connection.js');
const Locations = require('../models/locations.js');
const Inventory = require('../models/inventory.js');
const Products = require('../models/products.js');

//  Create Size Array
const sizes = ['Small', 'Medium', 'Large', 'XL', 'XXL'];

//  Create Color Array with object {name, url}
//  URL will have default value until i am able to upload my own swatches
const colors = [
  {
    color: 'red',
    colorUrl: 'http://google.com',
  },
  {
    color: 'blue',
    colorUrl: 'http://google.com',
  },
  {
    color: 'green',
    colorUrl: 'http://google.com',
  },
  {
    color: 'orange',
    colorUrl: 'http://google.com',
  },
];

/*
  Clear Existing Collections
*/
const removeExistingItems = () => new Promise((resolve, reject) => {
  const removedItems = [];
  removedItems.push(Products.deleteMany({}));
  removedItems.push(Locations.deleteMany({}));
  removedItems.push(Inventory.deleteMany({}));

  Promise.all(removedItems)
    .then(() => {
      resolve();
    })
    .catch((err) => {
      reject(err);
    });
});

/*
  Seed Products Collection
*/
const seedProductCollection = () => new Promise((resolve, reject) => {
  const createdItems = [];
  //  Loop to Create 100 product Ids
  for (let i = 1; i <= 100; i += 1) {
    //  Create possible product colors
    const availableColors = colors.slice();
    const productColors = [];
    let randomColors = faker.random.number({ min: 1, max: colors.length });

    while (randomColors > 0) {
      const randIndex = faker.random.number({ min: 0, max: randomColors - 1 });
      productColors.push(availableColors[randIndex]);
      availableColors.splice(randIndex, 1);
      randomColors -= 1;
    }

    //  Construct product object
    const product = {
      productId: i,
      name: faker.commerce.productName(),
      price: faker.finance.amount(0.01, 50.00, 2),
      size: sizes,
      color: productColors,
      reviews: [],
    };

    //  Create product
    createdItems.push(Products.create(product));
  }

  Promise.all(createdItems)
    .then((items) => {
      resolve(items);
    })
    .catch((err) => {
      reject(err);
    });
});

/*
  Create Reviews
*/
const createReviews = (products) => new Promise((resolve, reject) => {
  const updatedReviews = [];

  //  For each Product
  for (let i = 0; i < products.length; i += 1) {
    const product = products[i];
    //  Generate random number of reviews (max 100)
    const numOfReviews = faker.random.number({ min: 1, max: 100 });
    for (let j = 0; j < numOfReviews; j += 1) {
      //  create n reviews
      //  rating: random # out of 5
      const rating = faker.random.number({ min: 1, max: 5 });
      product.reviews.push({ rating });
    }
    const query = product.save();
    updatedReviews.push(query);
  }

  Promise.all(updatedReviews)
    .then(() => {
      resolve('Reviews Created');
    })
    .catch((err) => {
      reject(err);
    });
});

/*
  Seed Location Collection
*/
//  Create two locations
const seedLocationCollection = () => new Promise((resolve, reject) => {
  const createdLocations = [];
  for (let i = 1; i <= 2; i += 1) {
    const location = {
      storeId: i,
      zipCode: faker.address.zipCode('#####'),
      name: faker.address.city(),
    };

    createdLocations.push(Locations.create(location));
  }

  Promise.all(createdLocations)
    .then((locations) => {
      resolve(locations);
    })
    .catch((err) => {
      reject(err);
    });
});

/*
 Seed Inventory Collection
*/
const seedInventoryCollection = (products, locations) => {
  const createdInventory = [];

  return new Promise((resolve, reject) => {
    //  ForEach Product Id
    products.forEach((product) => {
      //  ForEach Size
      product.size.forEach((size) => {
        //  ForEach Color
        product.color.forEach((color) => {
          //  ForEach Location
          locations.forEach((storeId) => {
            //  Create Record with random number (max 15)
            const quantity = faker.random.number({ min: 0, max: 15 });
            const item = {
              productId: product.productId,
              size,
              color: color.color,
              storeId: storeId.storeId,
              quantity,
            };

            createdInventory.push(Inventory.create(item));
          });
        });
      });
    });

    Promise.all(createdInventory)
      .then((results) => {
        resolve(results);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


/*
  Run Promise Chain to Seed DB
 */
removeExistingItems()
  .then(() => seedProductCollection())
  .then(() => seedLocationCollection())
  .then(() => {
    Products.find({})
      .then((products) => {
        createReviews(products)
          .then(() => {
            Locations.find({})
              .then((locations) => seedInventoryCollection(products, locations))
              .then(() => {
                db.connection.close();
              });
          });
      });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log('Error: ', err);
  });
