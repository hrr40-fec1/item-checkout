import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Details from '../client/components/details/Details';
import Colors from '../client/components/details/Colors';
import ColorSquare from '../client/components/details/ColorSquare';
import Sizes from '../client/components/details/Sizes';
import SizeButton from '../client/components/details/SizeButton';
import Quantity from '../client/components/details/Quantity';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

describe('React Component Testing - Details', () => {
  test('Color Section is being rendered', () => {
    const wrapper = shallow(<Details />);
    expect(wrapper.find(Colors)).toHaveLength(1);
  });

  test('Size buttons are being rendered', () => {
    const wrapper = shallow(<Details />);
    expect(wrapper.find(Sizes)).toHaveLength(1);
  });

  test('Quantity Section is being rendered', () => {
    const wrapper = shallow(<Details />);
    expect(wrapper.find(Quantity)).toHaveLength(1);
  });

  describe('Color Section', () => {
    test('Colors are rendered based on number of colors for product', () => {
      const wrapper = shallow(<Colors />);
      wrapper.setProps({ colors: [{ color: 'blue' }, { color: 'red' }, { color: 'purple' }] });
      expect(wrapper.find(ColorSquare)).toHaveLength(3);
    });

    test('Color squares contain color with styled component', () => {
      const wrapper = shallow(<ColorSquare />);
      wrapper.setProps({ color: 'Red', currentSelected: 'Blue' });
      expect(wrapper.find('Square')).toHaveLength(1);
      expect(wrapper.find('Square').prop('color')).toBe('Red');
    });

    test('Current selection for color is highlighted', () => {
      const wrapper = mount(<ColorSquare />);
      wrapper.setProps({ color: 'Blue', currentSelected: 'Blue' });
      expect(wrapper.find('Button')).toHaveStyleRule('border', '2px solid rgb(0,131,0)');
      expect(wrapper.find('Square').prop('color')).toBe('Blue');
    });
  });

  describe('Size Section', () => {
    test('Size buttons are being rendered', () => {
      const wrapper = shallow(<Sizes />);
      wrapper.setProps({ sizes: ['S', 'M', 'L', 'XL', '2Xl'] });
      expect(wrapper.find(SizeButton)).toHaveLength(5);
    });

    test('Size button component is rendering a button with value', () => {
      const wrapper = shallow(<SizeButton />);
      wrapper.setProps({ size: 'M', currentSelected: 'XL' });
      expect(wrapper.find('Button')).toHaveLength(1);
      expect(wrapper.find('Button').text()).toBe('M');
    });

    test('Current selection for size is highlighted', () => {
      const wrapper = mount(<SizeButton />);
      wrapper.setProps({ size: 'XL', currentSelected: 'XL' });
      expect(wrapper.find('Button')).toHaveStyleRule('border', '2px solid rgb(0,131,0)');
      expect(wrapper.find('Button').text()).toBe('XL');
    });
  });

  describe('Quanity Section', () => {
    test('Dropdown exist with 99 values', () => {
      const wrapper = shallow(<Quantity />);
      expect(wrapper.find('option')).toHaveLength(99);
    });
  });
});
