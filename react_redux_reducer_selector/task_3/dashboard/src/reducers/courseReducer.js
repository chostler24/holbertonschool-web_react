import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
  } from '../actions/courseActionTypes';

  // Define the initial state as an empty array
  const initialState = [];

  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COURSE_SUCCESS:
        // When FETCH_COURSE_SUCCESS action is dispatched, set isSelected to false for each course item
        const updatedCourses = action.data.map(course => ({
          ...course,
          isSelected: false,
        }));
        return updatedCourses;

      case SELECT_COURSE:
        // When SELECT_COURSE action is dispatched, set isSelected to true for the selected course
        return state.map(course =>
          course.id === action.index
            ? { ...course, isSelected: true }
            : course
        );

      case UNSELECT_COURSE:
        // When UNSELECT_COURSE action is dispatched, set isSelected to false for the unselected course
        return state.map(course =>
          course.id === action.index
            ? { ...course, isSelected: false }
            : course
        );

      default:
        return state;
    }
  };

  export default courseReducer;
