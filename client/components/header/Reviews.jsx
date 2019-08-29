import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({ numOfReviews, reviewAverage }) => (
  <div>
    <span id="reviewAverage">{reviewAverage} </span>&nbsp;
    <span id="numOfReviews">{numOfReviews}</span>
  </div>
);

Reviews.propTypes = {
  numOfReviews: PropTypes.number,
  reviewAverage: PropTypes.number,
};

Reviews.defaultProps = {
  numOfReviews: 0,
  reviewAverage: 0,
};

export default Reviews;
