import * as GoogleAPIUtil from '../util/google_api_util';

export const GEOCODE = 'GEOCODE';
export const RECEIVE_ADDRESS_ERRORS = 'RECEIVE_ADDRESS_ERRORS';

export const receiveGeocode = geocodeResponse => ({
  type: GEOCODE,
  geocodeResponse
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ADDRESS_ERRORS,
  errors
});

export const fetchGeocode = address => dispatch => {
  return (
    GoogleAPIUtil.fetchGeocode(address)
    .then((geocodeResponse) => dispatch(receiveGeocode(geocodeResponse)),
    (errors) => dispatch(receiveErrors(errors)))
  );
};
