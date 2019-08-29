import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from '../client/components/App';
import Header from '../client/components/header/Header';
import Details from '../client/components/details/Details';
import Checkout from '../client/components/checkout/Checkout';

Enzyme.configure({ adapter: new Adapter() });

describe('React Component Testing - App', () => {
  test('Header is being rendered', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  test('Details is being rendered', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(wrapper.find(Details)).toHaveLength(1);
  });

  test('Checkout is being rendered', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(wrapper.find(Checkout)).toHaveLength(1);
  });
});
