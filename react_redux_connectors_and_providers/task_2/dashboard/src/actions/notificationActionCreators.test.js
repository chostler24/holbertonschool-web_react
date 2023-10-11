import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsRead, setTypeFilter } from "./notificationActionCreators";

describe('notificationActionCreators', () => {
  it('returns the correct action for markAsRead', () => {
    const expected = {
      type: MARK_AS_READ,
      index: 1,
    };

    const result = markAsRead(1);
    expect(result).toEqual(expected);
  });

  it('returns the correct action for setTypeFilter', () => {
    const expected = {
      type: SET_TYPE_FILTER,
      filter: "DEFAULT",
    };

    const result = setTypeFilter("DEFAULT");
    expect(result).toEqual(expected);
  });
});
