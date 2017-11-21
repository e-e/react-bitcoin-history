import { SET_ADDRESS } from '../actions';
// const INITIAL_STATE = '1GAMidaPrQmUb8MYb4NNJPQSznFHbKztfv';
// const INITIAL_STATE = '1EEJtQYGJkKWqcQNiJvRZAfRDqDZX69vjR';
const INITIAL_STATE = '1EzwoHtiXB4iFwedPr49iywjZn2nnekhoj';

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ADDRESS:
      return action.payload;

    default:
      return state;
  }
}
