import { merge } from 'lodash';
import { GEOCODE } from '../actions/address_actions';
import { saveAddress } from '../local_storage/local_storage';

const addressReducer = (oldState = null, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case GEOCODE:
      const newState = ({
        formattedAddress: action.geocodeResponse.results[0].formatted_address,
        lat: action.geocodeResponse.results[0].geometry.location.lat,
        lng: action.geocodeResponse.results[0].geometry.location.lng,
        addressComponents: action.geocodeResponse.results[0].address_components
      });
      saveAddress(newState);
      return newState;
    default:
      return oldState;
  }
};

export default addressReducer;
