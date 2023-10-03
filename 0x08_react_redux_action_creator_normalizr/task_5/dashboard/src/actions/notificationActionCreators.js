import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";

// Action creator function to mark a notification as read
export function markAsRead(index) {
  return {
    type: MARK_AS_READ, // Action type: MARK_AS_READ
    index, // Index of the notification to mark as read
  };
};

// Action creator function to set the notification type filter
export function setTypeFilter(filter) {
  return {
    type: SET_TYPE_FILTER, // Action type: SET_TYPE_FILTER
    filter: filter, // The notification type filter to set
  };
};
