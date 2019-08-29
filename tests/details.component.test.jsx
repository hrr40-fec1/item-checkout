import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Details from '../client/components/details/Details';
import Colors from '../client/components/details/Colors';
import Sizes from '../client/components/details/Sizes';
import Quantity from '../client/components/details/Quantity';

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
    test.todo('Colors are rendered based on number of colors for product');
    test.todo('Current selection for color is highlighted');
  });

  describe('Size Section', () => {
    test.todo('5 buttons is being rendered');
    test.todo('Current selection for size is highlighted');
  });

  describe('Quanity Section', () => {
    test.todo('Dropdown Exist');
  });
});
