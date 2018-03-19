import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const middlewares = [ReduxThunk];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require ('redux-logger');
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => {
  return(
    createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(...middlewares)
    )
  );
};

export default configureStore;
