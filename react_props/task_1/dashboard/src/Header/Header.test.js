import React from 'react';
import { render, shallow } from 'enzyme'; // Assuming you are using Enzyme for shallow rendering
import Header from './Header.js'; // Adjust the import path as needed

describe('Header Component Tests', () => {
  it('should render the Header component without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render img and h1 tags', () => {
    const wrapper = render(<Header />);

    // Check for the presence of img and h1 elements
    expect(wrapper.find('img').length).toBe(1); // Assuming you have one img element
    expect(wrapper.find('h1').length).toBe(1); // Assuming you have one h1 element
  });
});
