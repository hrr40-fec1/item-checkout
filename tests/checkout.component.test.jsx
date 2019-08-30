import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Checkout from '../client/components/checkout/Checkout';
import StorePickup from '../client/components/checkout/StorePickup';
import Delivery from '../client/components/checkout/Delivery';
import InStock from '../client/components/checkout/InStock';
import OutOfStock from '../client/components/checkout/OutOfStock';


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
    test('Render OutOfStock if quantity is 0', () => {
      const wrapper = shallow(<StorePickup />);
      wrapper.setProps({ availableQuantity: 0 });
      expect(wrapper.find(OutOfStock)).toHaveLength(1);
    });

    test('Render city in OutOfStock component', () => {
      const wrapper = shallow(<OutOfStock />);
      wrapper.setProps({ city: 'Port Ivy' });
      expect(wrapper.find('.h-text-bold').text()).toBe('Out of stock at Port Ivy');
    });

    test('Render InStock if quantity is 2', () => {
      const wrapper = shallow(<StorePickup />);
      wrapper.setProps({ availableQuantity: 2 });
      expect(wrapper.find(InStock)).toHaveLength(1);
    });

    test('Button to "Pick it up" is rendered', () => {
      const wrapper = shallow(<InStock />);
      expect(wrapper.find('button')).toHaveLength(1);
      expect(wrapper.find('button').text()).toBe('Pick it up');
    });

    test('In Store Pickup displaying city received from prop', () => {
      const wrapper = shallow(<InStock />);
      wrapper.setProps({ city: 'Port Ivy' });
      expect(wrapper.find('.h-text-bold').at(1).text()).toBe('at Port Ivy');
    });

    test('In Store Pickup displaying count of product at location', () => {
      const wrapper = shallow(<InStock />);
      wrapper.setProps({ availableQuantity: 10 });
      expect(wrapper.find('.h-text-orange').text()).toBe('only 10 left');
    });
  });

  describe('Delivery Section', () => {
    test.todo('Button to "Ship it" is rendered');
    test.todo('Display zip code of location');
  });
});
