const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');

beforeAll(async () => {
  // eslint-disable-next-line global-require
  await require('../db/index.js');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Test API routes', () => {
  test('Get Product Info - Item Exists', (done) => {
    request(app)
      .get('/api/product/10')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.productId).toBe(10);
        expect(res.body.size).toEqual(expect.any(Array));
        expect(res.body.name).toEqual(expect.any(String));
        expect(res.body.price).toEqual(expect.any(Number));
        expect(res.body.color).toEqual(expect.any(Array));
        expect(res.body.reviews).toEqual(expect.any(Array));
        return done();
      });
  });

  test('Get Product Info - Item Does Not Exist', (done) => {
    request(app)
      .get('/api/product/101')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        //  extra quotes required due to response being json string
        expect(res.text).toBe('"Product Does Not Exist"');
        return done();
      });
  });

  test('GET quantity - Item Exist', (done) => {
    request(app)
      .get('/api/quantity/5&Red&:L&2')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.text).toEqual(expect.any(String));
        return done();
      });
  });

  test('GET quantity - Item Does Not Exist', (done) => {
    request(app)
      .get('/api/quantity/5&blurple&:L&2')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.text).toBe('0');
        return done();
      });
  });

  test('GET location - exist', (done) => {
    request(app)
      .get('/api/location/2')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.storeId).toBe(2);
        expect(res.body.streetAddress).toEqual(expect.any(String));
        expect(res.body.city).toEqual(expect.any(String));
        expect(res.body.state).toEqual(expect.any(String));
        expect(res.body.zipCode).toEqual(expect.any(Number));
        return done();
      });
  });

  test('GET location - does not exist', (done) => {
    request(app)
      .get('/api/location/200')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.text).toBe('Store Does Not Exist');
        return done();
      });
  });

  test('GET route does not exist', (done) => {
    request(app)
      .get('/location/2')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.status).toBe(404);
        return done();
      });
  });
});
