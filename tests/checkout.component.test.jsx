import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Checkout from '../client/components/checkout/Checkout';
import StorePickup from '../client/components/checkout/StorePickup';
import Delivery from '../client/components/checkout/Delivery';

Enzyme.configure({ adapter: new Adapter() });

describe('React Component Testing - Checkout', () => {
  test('In Store Pickup is being rendered', () => {
    const wrapper = shallow(<Checkout />);
    expect(wrapper.find(StorePickup)).toHaveLength(1);
  });

  test('Delivery is being rendered', () => {
    const wrapper = shallow(<Checkout />);
    expect(wrapper.find(Delivery)).toHaveLength(1);
  });

  describe('StorePickup Section', () => {
    test.todo('Button to "Pick it up" is rendered');
    test.todo('In Store Pickup displaying count of product at location');
    test.todo('Display Out of stock if quantity is 0');
    test.todo('Display city name of lcoation');
  });

  describe('Delivery Section', () => {
    test.todo('Button to "Ship it" is rendered');
    test.todo('Display zip code of location');
  });
});
