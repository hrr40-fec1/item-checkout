/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import Header from './header/Header';
import Details from './details/Details';
import Checkout from './checkout/Checkout';
import helper from '../helper';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 0,
      storeId: 1,
      price: 0,
      colors: [],
      color: '',
      numOfReviews: 0,
      reviewAverage: 0,
      location: '',
      quantity: 0,
    };
  }

  componentDidMount() {
    const productId = helper.getProductId();
    this.setState({ productId }, () => {
      axios.all([
        helper.getProductInfo(this.state.productId),
        helper.getLocationInfo(this.state.storeId),
      ])
        .then(axios.spread((products, locations) => {
          const product = products.data;
          const colors = product.color;
          const defaultSize = 'L';
          helper.getInventoryInfo(
            this.state.productId,
            colors[0].color,
            defaultSize,
            locations.data.storeId,
          )
            .then((quantity) => {
              this.setState({
                price: Number((product.price / 100).toFixed(2)),
                numOfReviews: product.reviews.length,
                reviewAverage: helper.calcAverageRating(product.reviews),
                location: locations.data,
                colors,
                color: colors[0].color,
                size: defaultSize,
                quantity: parseInt(quantity.data, 10),
              });
            });
        }));
    });
  }


  render() {
    return (
      <div>
        <Header
          price={this.state.price}
          numOfReviews={this.state.numOfReviews}
          reviewAverage={this.state.reviewAverage}
        />
        <Details
          colors={this.state.colors}
          color={this.state.color}
          size={this.state.size}
        />
        <Checkout
          quantity={this.state.quantity}
          city={this.state.location.name}
          zip={this.state.location.zipCode}
        />
      </div>
    );
  }
}

export default App;
