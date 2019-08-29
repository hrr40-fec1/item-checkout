const mongoose = require('mongoose');

let db;

beforeAll(async () => {
  // eslint-disable-next-line global-require
  db = await require('../db/index.js');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Retreive Information from DB', () => {
  test('Retreive Product Information', async () => {
    const productInfo = await db.getProduct(50);

    expect(productInfo.size).toEqual(expect.any(Array));
    expect(productInfo.productId).toEqual(expect.any(Number));
    expect(productInfo.name).toEqual(expect.any(String));
    expect(productInfo.price).toEqual(expect.any(Number));
    expect(productInfo.color).toEqual(expect.any(Array));
    expect(productInfo.reviews).toEqual(expect.any(Array));
  });

  test('Retreive Product Information, product does not exist', async () => {
    const productInfo = await db.getProduct(1001);
    expect(productInfo).toBe('Product Does Not Exist');
  });

  test('Retreive Quantity of Given Product, color exist', async () => {
    const itemQuantity = await db.getQuantity(5, 'red', 'Large', 2);
    expect(itemQuantity).toEqual(expect.any(Number));
  });

  test('Retreive Quantity of Given Product, color does not exist', async () => {
    const itemQuantity = await db.getQuantity(5, 'blurple', 'Large', 2);
    expect(itemQuantity).toBe(0);
  });

  test('Retreive Location Info, storeId exists', async () => {
    const location = await db.getLocation(1);
    expect(location.name).toEqual(expect.any(String));
    expect(location.zipCode).toEqual(expect.any(Number));
  });

  test('Retreive Zip Code, storeId does not exists', async () => {
    const location = await db.getLocation(10);
    expect(location).toBe('Store Does Not Exist');
  });
});
