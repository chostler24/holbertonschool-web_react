import { Map } from 'immutable';
import * as actionTypes from '../actions/uiActionTypes';

// Define the initial state for the UI reducer as an Immutable Map
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({}), // Nested Map for the user object
});

// Define the UI reducer function
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_NOTIFICATION_DRAWER:
      // Update isNotificationDrawerVisible using set
      return state.set('isNotificationDrawerVisible', true);
    case actionTypes.HIDE_NOTIFICATION_DRAWER:
      // Update isNotificationDrawerVisible using set
      return state.set('isNotificationDrawerVisible', false);
    case actionTypes.LOGIN_SUCCESS:
      // Update isUserLoggedIn using set
      return state.set('isUserLoggedIn', true);
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.LOGOUT:
      // Update isUserLoggedIn using set
      return state.set('isUserLoggedIn', false);
    default:
      // Return the current state for unhandled actions
      return state;
  }
};

export default uiReducer;
