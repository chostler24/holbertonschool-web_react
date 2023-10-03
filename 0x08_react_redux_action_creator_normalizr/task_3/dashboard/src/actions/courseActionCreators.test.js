import { selectCourse, unselectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes'

describe('courseActionCreators', () => {
  it('returns the correct action for selectCourse', () => {
    const expected = {
      type: SELECT_COURSE,
      index: 1,
    };

    const result = selectCourse(1);
    expect(result).toEqual(expected);
  });

  it('returns the correct action for unselectCourse', () => {
    const expected = {
      type: UNSELECT_COURSE,
      index: 1,
    };

    const result = unselectCourse(1);
    expect(result).toEqual(expected);
  });
});
