import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Checkout from '../client/components/checkout/Checkout';
import StorePickup from '../client/components/checkout/StorePickup';
import Delivery from '../client/components/checkout/Delivery';
import InStock from '../client/components/checkout/InStock';
import OutOfStock from '../client/components/checkout/OutOfStock';
import 'jest-styled-components';


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
      expect(wrapper.find('Button')).toHaveLength(1);
      expect(wrapper.find('Button').text()).toBe('Pick it up');
    });

    test('In Store Pickup displaying city received from prop', () => {
      const wrapper = shallow(<InStock />);
      wrapper.setProps({ city: 'Port Ivy' });
      expect(wrapper.find('Location').text()).toBe('at Port Ivy?');
    });

    test('In Store Pickup displaying count of product at location', () => {
      const wrapper = shallow(<InStock />);
      wrapper.setProps({ availableQuantity: 10 });
      expect(wrapper.find('QuantityText').text()).toBe('only 10 left');
    });

    test('In Store Pickup displaying Orange text for product count <= 5', () => {
      const wrapper = mount(<InStock />);
      wrapper.setProps({ availableQuantity: 4 });
      expect(wrapper.find('QuantityText')).toHaveStyleRule('color', 'rgb(184,83,0)');
    });
  });

  describe('Delivery Section', () => {
    test('Button to "Ship it" is rendered', () => {
      const wrapper = shallow(<Delivery />);
      expect(wrapper.find('Button').text()).toBe('Ship It');
    });
    test('Display zip code of location', () => {
      const wrapper = shallow(<Delivery />);
      wrapper.setProps({ zip: 91709 });
      expect(wrapper.find('Location').text()).toBe('91709');
    });
  });
});
