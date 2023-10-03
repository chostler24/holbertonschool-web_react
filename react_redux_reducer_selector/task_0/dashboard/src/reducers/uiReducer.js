import * as actionTypes from '../actions/uiActionTypes';

// Define the initial state for the UI reducer
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

// Define the UI reducer function
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_NOTIFICATION_DRAWER:
      // Set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is dispatched
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };
    case actionTypes.HIDE_NOTIFICATION_DRAWER:
      // Set isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER action is dispatched
      return {
        ...state,
        isNotificationDrawerVisible: false,
      };
    case actionTypes.LOGIN_SUCCESS:
      // Set isUserLoggedIn to true when LOGIN_SUCCESS action is dispatched
      return {
        ...state,
        isUserLoggedIn: true,
      };
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.LOGOUT:
      // Set isUserLoggedIn to false when LOGIN_FAILURE or LOGOUT action is dispatched
      return {
        ...state,
        isUserLoggedIn: false,
      };
    default:
      // Return the current state for unhandled actions
      return state;
  }
};

export default uiReducer;
