import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Price from './Price';
import Reviews from './Reviews';

const Section = styled.section`
  padding: 5px 0px;
`;

const Header = ({ price, numOfReviews, reviewAverage }) => (
  <div>
    <Section>
      <Price price={price} />
    </Section>
    <Section>
      <Reviews numOfReviews={numOfReviews} reviewAverage={reviewAverage} />
    </Section>
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
