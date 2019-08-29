const express = require('express');
const db = require('../db/index.js');

const app = express();
app.use(express.static('public'));
const port = process.env.PORT || 3002;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server started on Port ${port}`));

app.get('/api/product/:productId', (req, res) => {
  const { productId } = req.params;

  db.getProduct(productId)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/api/quantity/:productId&:color&:size&:storeId', (req, res) => {
  // eslint-disable-next-line object-curly-newline
  const { productId, color, size, storeId } = req.params;
  db.getQuantity(productId, color, size, storeId)
    .then((quantity) => {
      res.status(200).send(quantity.toString());
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/api/location/:storeId', (req, res) => {
  // eslint-disable-next-line object-curly-newline
  const { storeId } = req.params;
  db.getLocation(storeId)
    .then((zipCode) => {
      res.status(200).send(zipCode.toString());
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
