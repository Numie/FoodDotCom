import * as GoogleAPIUtil from '../util/google_api_util';

export const GEOCODE = 'GEOCODE';
export const RECEIVE_ADDRESS_ERRORS = 'RECEIVE_ADDRESS_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveGeocode = geocodeResponse => ({
  type: GEOCODE,
  geocodeResponse
});

export const receiveErrors = () => ({
  type: RECEIVE_ADDRESS_ERRORS,
  error: 'Invalid address. Please re-enter your location.'
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchGeocode = address => dispatch => {
  return (
    GoogleAPIUtil.fetchGeocode(address)
    .then((geocodeResponse) => dispatch(receiveGeocode(geocodeResponse)),
    () => dispatch(receiveErrors()))
  );
};
