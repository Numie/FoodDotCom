import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const signup = (user) => dispatch => {
  return (
    APIUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors)))
  );
};

export const login = (user) => dispatch => {
  return (
    APIUtil.login(user)
    .then((user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors)))
  );
};

export const logout = () => dispatch => {
  return (
    APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)),
    (errors) => dispatch(receiveErrors(errors)))
  );
};
