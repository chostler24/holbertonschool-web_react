import React from 'react';
import { shallow } from 'enzyme'; // Assuming you are using Enzyme for shallow rendering
import Footer from './Footer.js'; // Adjust the import path as needed

describe('Footer Component Tests', () => {
  it('should render the Footer component without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);

    // Check for the presence of the "Copyright" text
    expect(wrapper.text()).toContain('Copyright');
  });
});
