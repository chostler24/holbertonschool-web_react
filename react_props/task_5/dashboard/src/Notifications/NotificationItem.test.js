import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component Tests', () => {
  // Test that NotificationItem renders without crashing
  it('renders without crashing', () => {
    const wrapper = shallow(
      <NotificationItem type="default" html={{ __html: '<u>test</u>' }} value="test" />
    );
    expect(wrapper.exists()).toBe(true);
  });

  // Test that NotificationItem renders with correct type and value props
  it('renders with correct type and value props', () => {
    const type = 'default';
    const value = 'test';
    const wrapper = shallow(<NotificationItem type={type} value={value} />);

    // Check if the data-notification-type attribute and the rendered text match the props
    expect(wrapper.prop('data-notification-type')).toBe(type);
    expect(wrapper.text()).toBe(value);
  });

  // Test that NotificationItem renders with correct HTML content
  it('renders with correct HTML content', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem type="default" html={html} value="test" />);

    // Check if the dangerouslySetInnerHTML prop contains the expected HTML content
    expect(wrapper.find('div').prop('dangerouslySetInnerHTML')).toEqual(html);
  });
});
