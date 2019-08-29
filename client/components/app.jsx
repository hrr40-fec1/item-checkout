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
      productId: '0',
      storeId: 1,
      price: 0,
      numOfReviews: 0,
      reviewAverage: 0,
      location: '',
    };
  }

  componentDidMount() {
    this.setState({ productId: 13 }, () => {
      axios.all([
        helper.getProductInfo(this.state.productId),
        helper.getLocationInfo(this.state.storeId),
      ])
        .then(axios.spread((products, locations) => {
          const product = products.data;
          this.setState({
            price: Number((product.price / 100).toFixed(2)),
            numOfReviews: product.reviews.length,
            reviewAverage: helper.calcAverageRating(product.reviews),
            location: locations.data,
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
        <Details />
        <Checkout
          city={this.state.location.name}
          zip={this.state.location.zipCode}
        />
      </div>
    );
  }
}

export default App;
