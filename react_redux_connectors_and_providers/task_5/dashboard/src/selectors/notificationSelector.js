import { createSelector } from 'reselect';
import { Map } from 'immutable';
import { getNotifications } from '../reducers/notificationReducer';

// Select the filter type from the state
const selectFilterType = (state) => state.notifications.filter;

// Select the notifications from the state
const selectNotifications = (state) => state.notifications.notifications;

// Create a selector for filterTypeSelected
export const filterTypeSelected = createSelector(
  selectFilterType,
  (filter) => filter
);

// Create a selector for getNotifications
export const getNotifications = createSelector(
  selectNotifications,
  (notifications) => Map(notifications)
);

// Create a selector for getUnreadNotifications
export const getUnreadNotifications = createSelector(
  selectNotifications,
  (notifications) =>
    Map(notifications).filter((notification) => !notification.isRead)
);
