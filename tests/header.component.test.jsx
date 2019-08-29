import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Header from '../client/components/header/Header';
import Price from '../client/components/header/Price';
import Reviews from '../client/components/header/Reviews';

Enzyme.configure({ adapter: new Adapter() });

describe('React Component Testing - Header', () => {
  test('Price section is being rendered', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Price)).toHaveLength(1);
  });

  test('Overall review section is being rendered', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Reviews)).toHaveLength(1);
  });

  describe('Pricing Section', () => {
    test('Price is rendering from prop', () => {
      const wrapper = shallow(<Price />);
      wrapper.setProps({ price: 10.71 });
      expect(wrapper.find('div').text()).toBe('10.71');
    });
  });

  describe('Reviews Section', () => {
    test('Average review value is rendered from prop', () => {
      const wrapper = shallow(<Reviews />);
      wrapper.setProps({ reviewAverage: 4.5 });
      expect(wrapper.find('span#reviewAverage').text().trim()).toBe('4.5');
    });

    test('Total number of reviews is being rendered from prop', () => {
      const wrapper = shallow(<Reviews />);
      wrapper.setProps({ numOfReviews: 73 });
      expect(wrapper.find('span#numOfReviews').text()).toBe('73');
    });
  });
});
