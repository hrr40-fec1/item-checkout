import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';
import Reviews from './Reviews';

const Header = ({ price, numOfReviews, reviewAverage }) => (
  <div>
    <Price price={price} />
    <Reviews numOfReviews={numOfReviews} reviewAverage={reviewAverage} />
  </div>
);

Header.propTypes = {
  price: PropTypes.number,
  numOfReviews: PropTypes.number,
  reviewAverage: PropTypes.number,
};

Header.defaultProps = {
  price: 0,
  numOfReviews: 0,
  reviewAverage: 0,
};

export default Header;
