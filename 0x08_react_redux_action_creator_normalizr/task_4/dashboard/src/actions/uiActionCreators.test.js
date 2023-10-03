import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

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
