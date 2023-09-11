import App from './App';
import React from 'react';
import { shallow } from 'enzyme';


describe('App Component Tests', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    const headerDiv = wrapper.find('.App-header');
    expect(headerDiv).toHaveLength(1);
  });

  it('should render a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    const bodyDiv = wrapper.find('.App-body');
    expect(bodyDiv).toHaveLength(1);
  });

  it('should render a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    const footerDiv = wrapper.find('.App-footer');
    expect(footerDiv).toHaveLength(1);
  });
});
