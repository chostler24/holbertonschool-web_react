import uiReducer from './uiReducer';
import * as actionTypes from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    // Ensure that the reducer returns the initial state when no action is dispatched
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = {
      type: 'SELECT_COURSE', // An action type that is not handled by uiReducer
    };
    // Verify that the reducer returns the initial state for an unknown action
    expect(uiReducer(initialState, action)).toEqual(initialState);
  });

  it('should correctly update isNotificationDrawerVisible when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = {
      type: actionTypes.DISPLAY_NOTIFICATION_DRAWER,
    };
    // Check that isNotificationDrawerVisible is set to true after the DISPLAY_NOTIFICATION_DRAWER action
    const nextState = uiReducer(initialState, action);
    expect(nextState.isNotificationDrawerVisible).toBe(true);
  });
});
