import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App Component', () => {
  let wrapper;

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  // Test that App renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test that App renders a div with the class App-header
  it('renders a div with class App-header', () => {
    wrapper.update();
    const headerDiv = wrapper.find('.App-header');
    expect(headerDiv.exists()).toBe(true);
  });

  // Test that App renders a div with the class App-body
  it('renders a div with class App-body', () => {
    wrapper.update();
    const bodyDiv = wrapper.find('.App-body');
    expect(bodyDiv.exists()).toBe(true);
  });

  // Test that App renders a div with the class App-footer
  it('renders a div with class App-footer', () => {
    wrapper.update();
    const footerDiv = wrapper.find('.App-footer');
    expect(footerDiv.exists()).toBe(true);
  });

  // Test that App contains the Notifications component
  it('contains the Notifications component', () => {
    expect(wrapper.find('Notifications').exists()).toBe(true);
  });

  // Test that App contains the Header component
  it('contains the Header component', () => {
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  // Test that App contains the Login component
  it('contains the Login component', () => {
    expect(wrapper.find('Login').exists()).toBe(true);
  });

  // Test that App contains the Footer component
  it('contains the Footer component', () => {
    expect(wrapper.find('Footer').exists()).toBe(true);
  });
});
