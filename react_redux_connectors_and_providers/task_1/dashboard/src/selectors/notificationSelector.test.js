import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications,
  } from './notificationSelector'; // Import the selectors to be tested

  describe('Notification Selectors', () => {
    // Sample state for testing
    const initialState = {
      notifications: {
        filter: 'DEFAULT',
        notifications: {
          1: { id: 1, isRead: false, type: 'default', value: 'Notification 1' },
          2: { id: 2, isRead: true, type: 'urgent', value: 'Notification 2' },
          3: { id: 3, isRead: false, type: 'urgent', value: 'Notification 3' },
        },
      },
    };

    // Test for filterTypeSelected selector
    it('should select the filter type', () => {
      const selectedFilter = filterTypeSelected(initialState);
      expect(selectedFilter).toBe('DEFAULT'); // Expecting the selected filter to be 'DEFAULT'
    });

    // Test for getNotifications selector
    it('should select and format notifications', () => {
      const selectedNotifications = getNotifications(initialState);
      expect(selectedNotifications.toJS()).toEqual({
        1: { id: 1, isRead: false, type: 'default', value: 'Notification 1' },
        2: { id: 2, isRead: true, type: 'urgent', value: 'Notification 2' },
        3: { id: 3, isRead: false, type: 'urgent', value: 'Notification 3' },
      }); // Expecting the selected notifications in Map format
    });

    // Test for getUnreadNotifications selector
    it('should select and format unread notifications', () => {
      const selectedUnreadNotifications = getUnreadNotifications(initialState);
      expect(selectedUnreadNotifications.toJS()).toEqual({
        1: { id: 1, isRead: false, type: 'default', value: 'Notification 1' },
        3: { id: 3, isRead: false, type: 'urgent', value: 'Notification 3' },
      }); // Expecting the selected unread notifications in Map format
    });
  });
