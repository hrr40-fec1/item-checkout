const db = require('mongoose');

db.connect('mongodb://localhost:27017/ontarget', { useNewUrlParser: true });

db.connection.on('connected', () => {
  // eslint-disable-next-line no-console
  console.log('connected to MongoDB');
});

db.connection.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.log('Error occurred: ', err);
});

module.exports = db;
