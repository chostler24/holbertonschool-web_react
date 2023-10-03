import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";
import { useDispatch } from 'react-redux';
import fetch from 'node-fetch';
import { bindActionCreators } from 'redux';

// Action creator function for user login
export function login(email, password) {
  return {
    type: LOGIN, // Action type: LOGIN
    user: { email, password }, // User information (email and password)
  };
}

// Action creator function for user logout
export function logout() {
  return {
    type: LOGOUT, // Action type: LOGOUT
  };
}

// Action creator function to display the notification drawer
export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER, // Action type: DISPLAY_NOTIFICATION_DRAWER
  };
}

// Action creator function to hide the notification drawer
export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER, // Action type: HIDE_NOTIFICATION_DRAWER
  };
}

// Binding action creators to be used in the application
export const boundActionCreators = bindActionCreators(
  {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
  }
);

// Action creator function for successful login
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS, // Action type: LOGIN_SUCCESS
  };
}

// Action creator function for login failure
export function loginFailure() {
  return {
    type: LOGIN_FAILURE, // Action type: LOGIN_FAILURE
  };
}

// Custom hook for dispatching course-related actions
export function useCourseActions() {
  const dispatch = useDispatch();
  return {
    login: (email, password) => dispatch(login(email, password)),
    logout: () => dispatch(unselectCourse()), // Note: unselectCourse() is not defined in this snippet
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
    loginSuccess: () => dispatch(loginSuccess()),
    loginFailure: () => dispatch(loginFailure()),
  };
}

// Asynchronous action creator for login request
export function loginRequest(email, password) {
  return async (dispatch) => {
    dispatch(login(email, password));

    try {
      const response = await fetch('/login-success.json');

      if (response.ok) {
        dispatch(loginSuccess());
      } else {
        throw new Error('Login failed'); // Handle login failure
      }
    } catch (error) {
      dispatch(loginFailure()); // Handle network or other errors
    }
  };
}
