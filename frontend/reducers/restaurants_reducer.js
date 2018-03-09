import { merge } from 'lodash';
import { RESTAURANTS } from '../actions/restaurant_actions';

// const testRestaurantState = {
//   1: {
//     address: "350 Fifth Ave, New York",
//     bearing: "207.110476228734",
//     close_time: "2000-01-01T21:00:00.000Z",
//     created_at: "2018-03-08T17:17:58.148Z",
//     cuisine: "salads",
//     delivery_fee: 2.99,
//     delivery_minimum: 15,
//     distance: 0.207635478894558,
//     id: 1,
//     img_url: "https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg",
//     latitude: 40.7484799,
//     longitude: -73.9854245,
//     name: "Chopt Creative Salad Co.",
//     open_time: "2000-01-01T10:45:00.000Z",
//     phone: "(929) 273-1656",
//     updated_at: "2018-03-08T17:17:58.148Z"
//   },
//   2: {
//     address: "350 Fifth Ave, New York",
//     bearing: "207.110476228734",
//     close_time: "2000-01-01T21:00:00.000Z",
//     created_at: "2018-03-08T17:17:58.148Z",
//     cuisine: "salads",
//     delivery_fee: 2.99,
//     delivery_minimum: 15,
//     distance: 0.207635478894558,
//     id: 2,
//     img_url: "https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg",
//     latitude: 40.7484799,
//     longitude: -73.9854245,
//     name: "Dig Inn",
//     open_time: "2000-01-01T10:45:00.000Z",
//     phone: "(929) 273-1656",
//     updated_at: "2018-03-08T17:17:58.148Z"
//   },
//   3: {
//     address: "350 Fifth Ave, New York",
//     bearing: "207.110476228734",
//     close_time: "2000-01-01T21:00:00.000Z",
//     created_at: "2018-03-08T17:17:58.148Z",
//     cuisine: "salads",
//     delivery_fee: 2.99,
//     delivery_minimum: 15,
//     distance: 0.207635478894558,
//     id: 3,
//     img_url: "https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg",
//     latitude: 40.7484799,
//     longitude: -73.9854245,
//     name: "Hale and Hearty",
//     open_time: "2000-01-01T10:45:00.000Z",
//     phone: "(929) 273-1656",
//     updated_at: "2018-03-08T17:17:58.148Z"
//   }
// };
//

const restaurantsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RESTAURANTS:
      return action.restaurants;
    default:
      return oldState;
  }
};

export default restaurantsReducer;
