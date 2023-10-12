import { coursesNormalizer } from '../schema/courses';
import { Map } from 'immutable';


// Define the default state of the course reducer
const defaultState = Map({
  1: {
    id: 1,
    name: 'ES6',
    isSelected: false,
    credit: 60,
  },
  2: {
    id: 2,
    name: 'Webpack',
    isSelected: false,
    credit: 20,
  },
  3: {
    id: 3,
    name: 'React',
    isSelected: false,
    credit: 40,
  },
});

// Define the course reducer itself
const courseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_COURSE_SUCCESS':
      // Normalize the data using the coursesNormalizer and merge it into the state
      const normalizedData = coursesNormalizer(action.data);
      return state.merge(normalizedData.entities.courses);

    case 'SELECT_COURSE':
      // Set the 'isSelected' property to true for the selected course
      return state.setIn([action.index, 'isSelected'], true);

    case 'UNSELECT_COURSE':
      // Set the 'isSelected' property to false for the unselected course
      return state.setIn([action.index, 'isSelected'], false);

    default:
      // Return the current state for unhandled actions
      return state;
  }
};

export default courseReducer;
