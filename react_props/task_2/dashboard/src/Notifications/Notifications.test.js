import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem'; // Import the NotificationItem component

describe('Notifications Component', () => {
  let wrapper;

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  // Test that Notifications renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test that Notifications renders NotificationItem elements
  it('renders NotificationItem elements', () => {
    wrapper.update();
    const notificationItems = wrapper.find(NotificationItem);
    expect(notificationItems.length).toBe(3); // Assuming you have three NotificationItem components
  });

  // Test that the first NotificationItem element renders the right HTML
  it('renders the correct HTML in the first NotificationItem', () => {
    wrapper.update();
    const notificationItems = wrapper.find(NotificationItem);
    const firstNotificationItem = notificationItems.at(0); // Get the first NotificationItem

    // Check if the first NotificationItem renders the expected HTML
    expect(firstNotificationItem.props().html).toEqual({ __html: '<u>test</u>' }); // Adjust this expectation to match your actual HTML content
  });

  // Test that Notifications renders the correct text
  it('renders a div with class App-body', () => {
    wrapper.update();
    const p = wrapper.find('p');
    expect(p.text()).toEqual('Here is the list of notifications');
  });
});
