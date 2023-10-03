import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

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
