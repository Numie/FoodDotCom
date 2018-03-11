import React from 'react';
import MenuItem from '../menu/menu_item';
import MenuItemModal from '../modals/menu_item_modal';

export default class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: null
    };

    this.selectItem = this.selectItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchMenuItems(this.props.match.params.id);

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
      position: {lat, lng},
        map
    });

    marker.setMap(this.map);
  }

  selectItem(selectedItem) {
    this.setState({currentItem: selectedItem});
  }

  render() {
    const { name, address, city, state, zip, phone, img_url, open_time, close_time, latitude, longitude, distance } = this.props.restaurant;
    const { toggleMenuItemModal, menuItemModal } = this.props;

    const menuItems = this.props.menuItems.map(menuItem => {
      return <MenuItem key={menuItem.id}  menuItem={menuItem} selectItem={this.selectItem} toggleMenuItemModal={toggleMenuItemModal} />;
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
                <div className='star-icon'></div>
                <div className='star-icon'></div>
                <div className='star-icon'></div>
                <div className='star-icon'></div>
                <div className='star-icon'></div>
              </div>
            </div>
          </div>

          <div className='menu-container'>
            <h2 className='menu-title'>Menu</h2>
            <ul className='menu'>
              {menuItems}
              { menuItemModal ? <MenuItemModal menuItem={this.state.currentItem} toggleMenuItemModal={toggleMenuItemModal}/> : null }
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
        </div>

        <div className='order-container'>
        </div>
      </div>
    );
  }
}
