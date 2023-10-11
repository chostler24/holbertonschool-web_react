import { Map } from 'immutable';
import uiReducer from './uiReducer';
import * as actionTypes from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({}),
    });
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({}),
    });
    const action = {
      type: 'SELECT_COURSE',
    };
    expect(uiReducer(initialState, action)).toEqual(initialState);
  });

  it('should correctly update isNotificationDrawerVisible when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({}),
    });
    const action = {
      type: actionTypes.DISPLAY_NOTIFICATION_DRAWER,
    };
    const nextState = uiReducer(initialState, action);
    // Use .get() to access properties in Immutable.js Map
    expect(nextState.get('isNotificationDrawerVisible')).toBe(true);
  });
});
