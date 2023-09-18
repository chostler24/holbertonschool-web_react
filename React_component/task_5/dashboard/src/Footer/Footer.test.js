import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
  let wrapper;

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    wrapper = mount(<Footer />);
  });

  // Test that Footer renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test that Footer renders the text "Copyright"
  it('renders the copyright string', () => {
    wrapper.update();
    expect(wrapper.text()).toContain('Copyright');
  });
});
