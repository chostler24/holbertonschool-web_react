import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE, // Add the SET_LOADING_STATE action type
} from '../actions/notificationActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  filter: 'DEFAULT',
  notifications: Map([]), // Update the initial state to use Map for notifications
  loading: false, // Add a loading attribute to the initial state
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Modify the FETCH_NOTIFICATIONS_SUCCESS case to perform a mergeDeep with the data
      return state.mergeDeep({
        loading: false, // Set loading to false after data is fetched
        notifications: Map(action.data), // Merge the new data into notifications
      });
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case SET_LOADING_STATE:
      return state.set('loading', action.isLoading); // Create the SET_LOADING_STATE case and update the state
    default:
      return state;
  }
};

export default notificationReducer;
