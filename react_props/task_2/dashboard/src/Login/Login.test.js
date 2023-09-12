import React from 'react';
import { shallow } from 'enzyme'; // Assuming you are using Enzyme for shallow rendering
import Login from './Login.js'; // Adjust the import path as needed

describe('Login Component Tests', () => {
  it('should render the Login component without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);

    // Check for the presence of input and label elements
    expect(wrapper.find('input').length).toBe(2); // Assuming you have two input elements
    expect(wrapper.find('label').length).toBe(2); // Assuming you have two label elements
  });
});
