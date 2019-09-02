/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';

const ReviewTotal = styled.span`
  padding-left: 10px;
  font-size: 12px;
`;

const Reviews = ({ numOfReviews, reviewAverage }) => (
  <div>
    <StarRatings
      rating={reviewAverage}
      starRatedColor="rgb(255, 215, 0)"
      numberOfStars={5}
      starDimension="20px"
      starSpacing="1px"
      name="rating"
    />
    <ReviewTotal id="numOfReviews">
      <a href="#">{numOfReviews}</a>
    </ReviewTotal>
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
