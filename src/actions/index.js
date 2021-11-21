import { ADD_EXERCISE } from '../types';

export const addExercise =
  ({ name, information, set }) =>
  (dispatch) => {
    dispatch({
      type: ADD_EXERCISE,
      payload: { name, information, set },
    });
  };
