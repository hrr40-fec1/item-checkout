import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const Reviews = ({ numOfReviews, reviewAverage }) => (
  <div>
    <StarRatings
      rating={reviewAverage}
      starRatedColor="rgb(255, 215, 0)"
      numberOfStars={5}
      starDimension="15px"
      starSpacing="1px"
      name="rating"
    />
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
