import { SELECT_COURSE } from "./courseActionTypes"; // Importing SELECT_COURSE constant
import { UNSELECT_COURSE } from "./courseActionTypes"; // Importing UNSELECT_COURSE constant

// Action creator function to select a course with a given index
export function selectCourse(index) {
  return {
    type: SELECT_COURSE, // Action type: SELECT_COURSE
    index, // The index of the course to select
  };
}

// Action creator function to unselect a course with a given index
export function unselectCourse(index) {
  return {
    type: UNSELECT_COURSE, // Action type: UNSELECT_COURSE
    index, // The index of the course to unselect
  }
}
