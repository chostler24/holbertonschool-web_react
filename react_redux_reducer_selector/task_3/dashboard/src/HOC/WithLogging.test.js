import React from 'react';
import { shallow } from 'enzyme';
import withLogging from './WithLogging';
import Login from '../Login/Login';

console.log = jest.fn();

describe('withLogging HOC', () => {
  afterAll(() => {
    console.log = console.log();
  });

  it('correctly logs when called on mount and unmount when the wrapped element is pure html', () => {
    const Component = withLogging(() => <p />);
    const wrapper = shallow(<Component />);
    wrapper.unmount();

    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('correctly logs when called on mount and unmount with the name of the component when the wrapped element is the Login component', () => {
    const Component = withLogging(Login);
    const wrapper = shallow(<Component />);
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  })
});
