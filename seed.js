const faker = require('faker');
const db = require('mongoose');

require('mongoose-currency').loadType(db);
const Currency = db.Types.Currency;

//  Connect to DB
db.connect('mongodb://localhost:27017/ontarget', {useNewUrlParser: true});

db.connection.on('connected', () => {
  console.log('connected to MongoDB');
});

db.connection.on('error', err => {
  console.log('Error occurred: ', err);
});

//  Create Size Array
const sizes = ['Small', 'Medium', 'Large', 'XL', 'XXL'];

//  Create Color Array with object {name, url}
//  URL will have default value until i am able to upload my own swatches
const colors = [
  {
    color: 'red',
    colorUrl: 'http://google.com'
  },
  {
    color: 'blue',
    colorUrl: 'http://google.com'
  },
  {
    color: 'green',
    colorUrl: 'http://google.com'
  },
  {
    color: 'orange',
    colorUrl: 'http://google.com'
  }
];

/////////////////////////
//  Schema Definition  //
/////////////////////////
const reviewSchema = db.Schema({
  rating: Number
});

const productSchema = db.Schema({
  productId: Number,
  name: String,
  price: { type: Currency },
  size: [String],
  color: {},
  reviews: [reviewSchema]
});

const locationSchema = db.Schema({
  storeId: Number,
  name: String
});

const inventorySchema = db.Schema({
  productId: Number,
  size: String,
  color: String,
  storeId: String,
  quantity: Number
});

////////////////////////
//  Model Definition  //
////////////////////////
const Products = db.model('products', productSchema);
const Locations = db.model('locations', locationSchema);
const Inventory = db.model('inventory', inventorySchema, 'inventory');

//////////////////////////////////
//  Clear Existing Collections  //
//////////////////////////////////
Products.collection.drop();
Locations.collection.drop();
Inventory.collection.drop();

////////////////////////////////
//  Seed Products Collection  //
////////////////////////////////
const seedProductCollection = () => {
  //  Loop to Create 100 product Ids
  for (let i = 1; i <= 100; i++) {
    //  Create possible product colors
    const availableColors = colors.slice();
    const productColors = [];
    randomColors = faker.random.number({min: 1, max: colors.length});

    while (randomColors > 0) {
      let randIndex = faker.random.number({min: 0, max: randomColors - 1});
      productColors.push(availableColors[randIndex]);
      availableColors.splice(randIndex, 1);
      randomColors--;
    }

    //  Construct product object
    const product = {
      productId: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      size: sizes,
      color: productColors,
      reviews: []
    };

    //  Create product
    Products.create(product)
      .then(() => {
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

//////////////////////
//  Create Reviews  //
//////////////////////
const createReviews = () => {
  //  FindAll ProductIds from Items Collection
  Products.find({}, (err, products) => {
    if (err) {
      throw err;
    }

    //  For each Product
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      //  Generate random number of reviews (max 100)
      let numOfReviews = faker.random.number({min: 1, max: 100});
      for (let i = 0; i < numOfReviews; i++) {
        //  create n reviews
        //  rating: random # out of 5
        let rating = faker.random.number({min: 1, max: 5});
        product.reviews.push({rating: rating});
      }
      product.save();
    }
  });

};

////////////////////////////////
//  Seed Location Collection  //
////////////////////////////////
//  Create two locations
const seedLocationCollection = () => {
  for (let i = 0; i < 2; i++) {
    let location = {
      storeId: i,
      name: faker.address.city()
    };

    Locations.create(location)
      .then((result) => {
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};


////////////////////////////////
// Seed Inventory Collection  //
////////////////////////////////
const seedInventoryCollection = () => {
  //  FindAll ProductIds from Items Collection
  Products.find({}, (err, products) => {
    for (let i = 0; i < products.length; i++) {
      //  ForEach Product Id
      const product = products[i];
      //  ForEach Size
      product.size.forEach((size) => {
        //  ForEach Color
        product.color.forEach((color) => {
          //  ForEach Location
          Locations.find({}, (err, locations) => {
            locations.forEach((storeId) => {
              //  Create Record with random number (max 15)
              let quantity = faker.random.number({min: 0, max: 15});
              let item = {
                productId: product.productId,
                size: size,
                color: color.color,
                storeId: storeId.storeId,
                quantity: quantity
              };

              Inventory.create(item)
                .then(() => {
                  return;
                })
                .catch((err) => {
                  console.log(err);
                });
            });
          });
        });
      });
    }
  });
};

seedProductCollection();
seedLocationCollection();
createReviews();
seedInventoryCollection();