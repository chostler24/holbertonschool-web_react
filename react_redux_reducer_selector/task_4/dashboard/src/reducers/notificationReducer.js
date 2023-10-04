import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
  } from '../actions/notificationActionTypes';

  // Define the initial state for the notification reducer
  const initialState = {
    filter: 'DEFAULT',
    notifications: [],
  };

  const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NOTIFICATIONS_SUCCESS:
        // When FETCH_NOTIFICATIONS_SUCCESS action is dispatched, update notifications and set isRead to false for each item
        const updatedNotifications = action.data.map(notification => ({
          ...notification,
          isRead: false,
        }));
        return {
          ...state,
          notifications: updatedNotifications,
        };

      case MARK_AS_READ:
        // When MARK_AS_READ action is dispatched with an index, mark the notification as read
        const markedNotifications = state.notifications.map(notification => ({
          ...notification,
          isRead: notification.id === action.index ? true : notification.isRead,
        }));
        return {
          ...state,
          notifications: markedNotifications,
        };

      case SET_TYPE_FILTER:
        // When SET_TYPE_FILTER action is dispatched with a filter, update the filter attribute
        return {
          ...state,
          filter: action.filter,
        };

      default:
        return state;
    }
  };

  export default notificationReducer;
