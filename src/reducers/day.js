import { ADD_EXERCISE } from '../types';

export const initialState = {
  workouts: [
    { id: 'workout1', name: 'CHEST DAY - with ARM exercise' },
    { id: 'workout2', name: 'LEG DAY - with ARM exercise' },
  ],
  exercises: [
    {
      name: 'Exercise A',
      information: '50 lb x 5',
      set: 3,
    },
  ],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_EXERCISE:
      return {
        ...state,
        exercises: [
          ...state.exercises,
          {
            name: payload.name,
            information: payload.information,
            set: payload.set,
          },
        ],
      };
    default:
      return state;
  }
}
