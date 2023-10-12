import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes";
import { bindActionCreators } from 'redux';

// Action creator function to mark a notification as read
export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

// Action creator function to set the notification type filter
export function setTypeFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter: filter,
  };
}

// Action creator function to set the loading state
export function setLoadingState(isLoading) {
  return {
    type: SET_LOADING_STATE,
    isLoading,
  };
}

// Action creator function to set notifications with data
export function setNotifications(data) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data,
  };
}

// Action creator function to fetch notifications
export function fetchNotifications() {
  return (dispatch) => {
    // Dispatch setLoadingState with true to indicate loading
    dispatch(setLoadingState(true));

    // Perform the fetch operation
    fetch('/notifications.json')
      .then((response) => response.json())
      .then((data) => {
        // Dispatch setNotifications with the fetched data
        dispatch(setNotifications(data));
        // Set the loading state to false after the query
        dispatch(setLoadingState(false));
      })
      .catch((error) => {
        // Handle any errors if needed
        console.error('Error fetching notifications:', error);
        // Set the loading state to false in case of an error
        dispatch(setLoadingState(false));
      });
  };
}

// Binding action creators to be used in the application
export const boundNotificationsActionCreators = bindActionCreators(
  {
    markAsRead,
    setTypeFilter,
    setLoadingState,
    setNotifications,
    fetchNotifications,
  }
);
