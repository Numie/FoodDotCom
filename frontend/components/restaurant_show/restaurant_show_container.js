import React from 'react';
import RestaurantShow from './restaurant_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  // restaurant: state.entities.restaurants[ownProps.match.params.id]
  restaurant: {
              address:"58 W 36th St, New York",
              bearing:"126.506023902373",
              close_time:"2000-01-01T21:00:00.000Z",
              created_at:"2018-03-09T18:05:05.519Z",
              cuisine:"Hamburgers, Healthy...",
              delivery_fee:null,
              delivery_minimum:0,
              distance:0.417325018163292,
              id:8,
              img_url:"https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg",
              latitude:40.750486,
              longitude:-73.9859299,
              name:"Fresh Leaf",
              open_time:"2000-01-01T11:00:00.000Z",
              phone:"510.773.4210",
              updated_at:"2018-03-09T18:05:05.519Z"
            }
});

export default withRouter(connect(mapStateToProps, null)(RestaurantShow));
