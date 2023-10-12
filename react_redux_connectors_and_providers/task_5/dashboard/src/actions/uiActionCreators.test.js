import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest,
} from './uiActionCreators';

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

describe('uiActionCreators', () => {
  it('returns the correct action for login', () => {
    const expected = {
      type: LOGIN,
      user: { email: 'test@test.com', password: 'password' },
    };

    const result = login('test@test.com', 'password');
    expect(result).toEqual(expected);
  });

  it('returns the correct action for logout', () => {
    const expected = {
      type: LOGOUT,
    };

    const result = logout();
    expect(result).toEqual(expected);
  });

  it('returns the correct action for displayNotificationDrawer', () => {
    const expected = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };

    const result = displayNotificationDrawer();
    expect(result).toEqual(expected);
  });

  it('returns the correct action for hideNotificationDrawer', () => {
    const expected = {
      type: HIDE_NOTIFICATION_DRAWER,
    };

    const result = hideNotificationDrawer();
    expect(result).toEqual(expected);
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('loginRequest action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS when the API returns the correct response', () => {
    fetchMock.getOnce('/login-success.json', {
      body: { user: 'test user'},
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
      { type: LOGIN_SUCCESS },
    ];

    const store = mockStore({ user: {} });

    return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches LOGIN and LOGIN_FAILURE when the API fails', () => {
    fetchMock.getOnce('/login-success.json', 404);

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
      { type: LOGIN_FAILURE },
    ];

    const store = mockStore({ user: {} });

    return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
