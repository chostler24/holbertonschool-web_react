import { Map } from 'immutable';
import * as actionTypes from '../actions/uiActionTypes';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({}),
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case actionTypes.HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case actionTypes.LOGIN_SUCCESS:
      return state
        .set('isUserLoggedIn', true)
        .set('user', Map(action.user)); // Set the user based on the action
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.LOGOUT:
      return state
        .set('isUserLoggedIn', false)
        .set('user', Map({})); // Set the user to an empty Map for LOGOUT
    default:
      return state;
  }
};

export default uiReducer;
