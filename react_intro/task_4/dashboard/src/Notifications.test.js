import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';

describe('Notifications Component Tests', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render three list items', () => {
    const wrapper = shallow(<Notifications />);
    const listItems = wrapper.find('li');
    expect(listItems).toHaveLength(3);
  });

  it('should render the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    const text = wrapper.text();
    expect(text).toContain('Here is the list of notifications');
  });
});
