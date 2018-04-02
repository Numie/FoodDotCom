import React from 'react';
import MenuItem from '../menu/menu_item';
import MenuItemModal from '../modals/menu_item_modal';
import Order from '../order/order';
import Review from '../review/review';
import ReviewModal from '../modals/review_modal';

export default class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: null
    };

    this.selectItem = this.selectItem.bind(this);
    this.toggleReviewModal = this.toggleReviewModal.bind(this);
  }

  componentDidMount() {
    if (this.props.restaurant.id !== parseInt(this.props.orderRestaurantId)) {
      this.props.deleteAllItems();
    }

    this.props.fetchMenuItems(this.props.match.params.id);
    this.props.fetchReviews(this.props.match.params.id);

    if (this.props.currentUser) {
      this.props.reviewable(this.props.match.params.id);
    }

    const map = this.refs.map;
    const lat = this.props.restaurant.latitude;
    const lng = this.props.restaurant.longitude;
    this.map = new google.maps.Map(map, {
      center: {lat: lat, lng: lng},
      zoom: 15,
      clickableIcons: false,
      draggable: false,
      disableDefaultUI: true
    });

    const marker = new google.maps.Marker({
      position: {lat, lng}
    });

    marker.setMap(this.map);
  }

  componentDidUpdate() {
    if ((parseInt(this.props.match.params.id) !== this.props.orderRestaurantId) && (Number.isInteger(this.props.orderRestaurantId))) {
      this.props.deleteAllItems();
      this.props.fetchMenuItems(this.props.match.params.id);
    }
  }

  selectItem(selectedItem) {
    this.setState({currentItem: selectedItem});
  }

  toggleReviewModal(e) {
    e.preventDefault();
    this.props.toggleReviewModal();
  }

  render() {
    const { name, address, city, state, zip, phone, img_url, open_time, close_time, latitude, longitude, distance, rating_avg, rating_count } = this.props.restaurant;
    const { currentUserFirstName, toggleMenuItemModal, menuItemModal, reviewModal, currentUser, restaurantReviewable } = this.props;
    const canReview = restaurantReviewable === null ? null : restaurantReviewable.reviewable;

    const menuItems = this.props.menuItems.map(menuItem => {
      return <MenuItem key={menuItem.id}  menuItem={menuItem} selectItem={this.selectItem} toggleMenuItemModal={toggleMenuItemModal} />;
    });

    const reviews = this.props.reviews.map(review => {
      return <Review key={review.id} review={review} />;
    });

    return (
      <div className='restaurant-show-container'>
        <div className='restaurant-show-main'>
          <div className='top-info-container'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Appacademylogo.png/175px-Appacademylogo.png' />
            <div className='top-restaurant-info'>
              <h1>{name}</h1>
              <div className='address-phone-container'>
                <h6>{address}</h6>
                <h6>{phone}</h6>
              </div>
              <div className='stars-container'>
                <div className={parseFloat(rating_avg) >= 0.5 ? 'star-icon-yellow' : 'star-icon-light-gray'}></div>
                <div className={parseFloat(rating_avg) >= 1.5 ? 'star-icon-yellow' : 'star-icon-light-gray'}></div>
                <div className={parseFloat(rating_avg) >= 2.5 ? 'star-icon-yellow' : 'star-icon-light-gray'}></div>
                <div className={parseFloat(rating_avg) >= 3.5 ? 'star-icon-yellow' : 'star-icon-light-gray'}></div>
                <div className={parseFloat(rating_avg) >= 4.5 ? 'star-icon-yellow' : 'star-icon-light-gray'}></div>

                <h6>{rating_count} Ratings</h6>
              </div>
            </div>
          </div>

          <div className='menu-container'>
            <h2 className='menu-title'>Menu</h2>
            <ul className='menu'>
              {menuItems}
              { menuItemModal ? <MenuItemModal menuItem={this.state.currentItem} deliveryFee={this.props.restaurant.delivery_fee} deliveryMinimum={this.props.restaurant.delivery_minimum} toggleMenuItemModal={toggleMenuItemModal}
              restaurantName={this.props.restaurant.name}/> : null }
            </ul>
          </div>

          <div className='bottom-info-container'>
            <div className='left-location-info'>
              <h1>About {name}</h1>
              <div className='map' ref='map'>
                Map
              </div>
              <ul className='restaurant-info-list'>
                <li>{address}</li>
                <li>{city}, {state} {zip}</li>
                <li>{distance.toFixed(2)} mi</li>
                <li>{phone}</li>
              </ul>
            </div>
            <div className='right-hours-info'>
              <h3>Hours</h3>
              <div className='hours-container'>
                <h6>Today</h6>
                <div className='hours'>
                  <ul>
                    <li>Delivery: {open_time}-{close_time}</li>
                    <li>Pickup: {open_time}-{close_time}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='reviews-container'>
            <div className='reviews-heading'>
              <div><h1>Reviews for {name}</h1></div>
              <button className={canReview ? 'review-button' : 'hidden'} onClick={this.toggleReviewModal}>Rate your last order</button>
              { reviewModal ? <ReviewModal restaurantName={name}/> : null }
            </div>
            {reviews}
          </div>
        </div>

        <div className='order-container'>
          <Order selectItem={this.selectItem} toggleMenuItemModal={toggleMenuItemModal}/>
        </div>
      </div>
    );
  }
}
