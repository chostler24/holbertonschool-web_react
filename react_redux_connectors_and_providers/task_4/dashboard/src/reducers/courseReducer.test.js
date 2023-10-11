import courseReducer from '../reducers/courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  // Test for the initial state
  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual([]); // Expecting an empty array as the initial state
  });

  // Test for handling FETCH_COURSE_SUCCESS action
  it('should handle FETCH_COURSE_SUCCESS', () => {
    const courses = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
    ];
    expect(
      courseReducer([], { type: FETCH_COURSE_SUCCESS, payload: courses })
    ).toEqual(courses); // Expecting the array of courses as the new state
  });

  // Test for handling SELECT_COURSE action
  it('should handle SELECT_COURSE', () => {
    const courses = [
      { id: 1, name: 'Course 1', selected: false },
      { id: 2, name: 'Course 2', selected: false },
    ];
    const expectedCourses = [
      { id: 1, name: 'Course 1', selected: true },
      { id: 2, name: 'Course 2', selected: false },
    ];
    expect(courseReducer(courses, { type: SELECT_COURSE, payload: 1 })).toEqual(
      expectedCourses
    ); // Expecting the selected course's 'selected' property to be true
  });

  // Test for handling UNSELECT_COURSE action
  it('should handle UNSELECT_COURSE', () => {
    const courses = [
      { id: 1, name: 'Course 1', selected: true },
      { id: 2, name: 'Course 2', selected: false },
    ];
    const expectedCourses = [
      { id: 1, name: 'Course 1', selected: false },
      { id: 2, name: 'Course 2', selected: false },
    ];
    expect(
      courseReducer(courses, { type: UNSELECT_COURSE, payload: 1 })
    ).toEqual(expectedCourses); // Expecting the unselected course's 'selected' property to be false
  });
});
