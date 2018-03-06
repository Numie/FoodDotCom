import { merge } from 'lodash';

const restaurantsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    default:
      return oldState;
  }
};

export default restaurantsReducer;
