# Food.com

Food.com is a clone of Seamless.com. Why the name Food.com? Because it's a simpler, more basic version of Seamless, obviously. It allows users to find local restaurants near them, view menus, place orders and write reviews. See it live [here](https://fooddotcom.herokuapp.com/). For comparison, check out Seamless [here](http://seamless.com/).

## Technical Structure

Food.com is built in Rails with a PostgreSQL database. Data requests are made with AJAX and return JSON responses using JBuilder. The frontend is built with React.js components and Redux state management.

## Features

### *User Auth*

Food.com uses BCrypt for hashing and checking passwords. Plain text passwords are never stored in the database.

### *Restaurant Search*

The restaurant search feature requires the application the navigate the Google Maps API (pun most definitely intended). There are two main components:

1. Receiving an address via user input and geocoding it.
1. Returning a filtered list of restaurants that are in range.

Receiving the address is not as simple as adding an input field and button. The application needs some control over the format of the address in order to geocode it correctly. Thus, I used the Google Autocomplete API to present users with a dropdown list of matching (and well-formatted) addresses to choose from. Once the address is entered The Ruby Geocoder gem allows form returning restaurants within a chosen radius. Food.com only returns resturants one mile away from the user or closer.

![Search Dropdown](https://media.giphy.com/media/1zhpf3fL01JHD0OjFa/giphy.gif)

### *Filters*

Filter restaurant search results by rating, price and delivery fee (and more filter options to come!) In order to implement this feature, the application must track which filters are active, keep a list of currently filtered restaurants and know when to show the filtered list versus the total list.

### *Menus*

Menus are complicated. Every restaurant has menu items. Each item has option sections that can be required or optional. Each option section has multiple options. Users may add items to their orders, edit items, remove items or empty their bag and remove all items at once and they may take all of those actions with options as well.

![Menu Item Modal](https://media.giphy.com/media/6GFcK6OWBCydfB5wt5/giphy.gif)

### *Ordering*

Users must be logged in to proceed to the checkout page. If they are not logged in, they are prompted to do so. Credit card fields are only present to mimic the Seamless layout, but are not necessary to complete an order. The order, every item in the order and every option for every item is saved to its respective database table with a single AJAX request.

### *Reviews*

After ordering, users are prompted to review the restaurant. Reviews are displayed at the bottom of restaurant menu pegas and are listed in order of recency.

![Reviews](https://media.giphy.com/media/RIj22WFEz5hUBlTTHl/giphy.gif)

### *UI*

All modals are custom-built without use of external libraries. All pages, while created exclusively for laptop/desktop browsers, are built to expand and contract gracefully to provide a good experience on most screen sizes.

## *Future*

Upcoming features include:
1. ~~Menu item customization (add toppings, choose your preparation, etc.)~~
1. Restaurant sorting by rating, price and distance.
1. User profiles – Order histories.
1. User profiles – Saved addresses.
