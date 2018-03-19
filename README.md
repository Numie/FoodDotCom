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

### *Menus*

Each restaurant has a unique menu. Users may add items to their orders, edit items, remove items or empty their bag and remove all items at once. The menu item modal requires some edge case error handling such as only allowing items to be added to order in quantities that are integers, preventing users from decreasing the quantity below 1, and preventing accidentally large orders (the maximum quantity is set to 99).

### *Ordering*

Users must be logged in to proceed to the checkout page. If they are not logged in, they are promopted to do so. The checkout page allows users to add a tip and delivery instructions. Credit card fields are only present to mimic the Seamless layout, but are not necessary to complete an order. If I was to implement payment processing, I would use the Authorize.net API to do so and add an SSL certificate in order to use https. Credit card information can never be saved to a database, which would be a severe PCI violation and expose the application and its owners to liability.

### *Reviews*

After ordering, users are prompted to review the restaurant. Reviews are displayed at the bottom of restaurant menu pegas and are listed in order of recency.

### *UI*

All modals are custom-built without use of external libraries. All pages, while created exclusively for laptop/desktop browsers, are built to expand and contract gracefully to provide a good experience on most screen sizes.

### *Future*

Upcoming feature additions include menu item customization (add toppings, choose your preparation, etc.), and user profiles including saved addresses and order history.
