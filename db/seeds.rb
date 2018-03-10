# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Geocoder.search('address') to get lat and lng

Faker::Config.locale = 'en-US'

NAMES = [
  'Hong Kong Station',
  'Speedy\'s',
  'Shake Shack',
  'Moonstruck on Madison',
  'Kati Roll',
  'Eden Wok',
  'Marche Madison',
  'Fresh Leaf',
  'Koshe Poke',
  'Hot & Crusty',
  'H & H Midtown Bagels',
  'Just Salad',
  'Bareburger',
  'Pinkberry',
  'Chopt Creative Salad Co.',
  'Two Boots',
  'Tenzan sushi',
  'Tribeca Bagels',
  'La Esquina Taqueria',
  'Breakroom',
  'Fresh Tortilla Express',
  'Fresh & Co.',
  'Nagomi Japanese Restaurant',
  'The Mill',
  'Hale & Hearty',
  'Market Crates',
  'Cafe China',
  'The Cibo',
  'Tio Pio',
  'Pokeworks',
  'Fields Good Chicken',
  'Market Crates',
  'Poketeria',
  'Guy & Gallard',
  'Omar\'s Mediterranean',
  'Schnippers Quality Kitchen',
  'Moe\'s Southwest Grill',
  'Bread & Butter',
  'Natureworks',
  'Szechuan Gourmet',
  'Num Pang Kitchen',
  'Gong Cha',
  'Scotty\'s Diner',
  'Go Go Curry',
  'City Cafe',
  'Sophie\'s Cuban Cuisine',
  'Sweetcatch Poke',
  'Fuel Grill & Juice Bar',
  'Mighty Quinn\'s BBQ',
  'Smashburger',
  'Beyond Sushi',
  'Sticky\'s Finger Joint',
  'Hummus & Pita Co.',
  'Piccolo Cafe',
  'Shorty\'s',
  'The Little Beet',
  'Wrap-N-Run',
  'Gotham Pizza',
  'Kobeyaki',
  'Dos Toros Taqueria',
  'New Ichiro Sushi',
  'Blockheads Burritos',
  'Spice Thai Food',
  'Hunan Kitchen',
  'Tenzan Sushi',
  'Glaze Teriyaki Grill',
  'Nanoosh',
  'Roast Kitchen',
  'The Smith',
  'Vapiano',
  'Joe\'s Pizza',
  'The Nugget Spot',
  'Sushi Choshi',
  'Sao Mai Vietnamese Cuisine',
  'Abumi Sushi',
  'Dos Toros Taqueria',
  'Village Taverna',
  'Indikitch',
  'Klong Asian Bistro',
  'GRK Fresh Greek Food',
  'Tozt Cafe',
  'Kumo Sushi'
]

def random_manhattan_zip
  zip = (10001..10025).to_a.sample
  zip.to_s
end

def formatted_phone
  phone = Faker::PhoneNumber.phone_number
  until phone[0] == "(" && phone.length == 14
    phone = Faker::PhoneNumber.phone_number
  end
  phone
end

def random_manhattan_latitude
  rand * (40.798903 - 40.700910) + 40.700910
end

def random_manhattan_longitude
  rand * (-73.931059 + 74.019505) - 74.019505
end

INDEX_IMAGE_URLS = [
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/sandwiches.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/asian.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/salads.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/american.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/pizza.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/indian.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/hamburgers.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/mexican.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/bbq.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/sushi.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/fresh-fruits.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/italian.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/seafood.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/middle-eastern.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/turkish.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/pasta.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/grill.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/chinese.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/hawaiian.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/japanese.jpg',
  'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/thai.jpg'
]

User.create(first_name: 'Guest', last_name: 'Demo', email: 'guest@food.com', password: 'guestdemo')
User.create(first_name: 'Jason', last_name: 'Numeroff', email: 'jnumeroff@hotmail.com', password: 'starwars')

500.times do
  Restaurant.create!(name: NAMES.sample, address: Faker::Address.street_address,
    zip: random_manhattan_zip, phone: formatted_phone, img_url: INDEX_IMAGE_URLS.sample,
    cuisine: 'Asian, Dim Sum...', delivery_minimum: [0, 0, 0, 8, 10, 10, 12, 15, 15].sample,
    delivery_fee: [0, 0, 0, 1, 1.99, 2, 2.99, 3.99, 5].sample, open_time: '11:00am', close_time: '9:00pm',
    latitude: random_manhattan_latitude, longitude: random_manhattan_longitude)
end

# Midtown
#Use 22 w 38th St to find these restaurants

# Restaurant.create!(name: 'Hong Kong Station', address: '22 W 38th Street', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/asian.jpg', cuisine: 'Asian, Dim Sum...', delivery_minimum: 10, open_time: '11:00am', close_time: '9:00pm', latitude: 40.7512817, longitude: -73.9839901)
# Restaurant.create!(name: 'Speedy\'s', address: '1271 Broadway Ave', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/american.jpg', cuisine: 'American, Hamburgers...', delivery_minimum: 10, delivery_fee: 1.50, open_time: '11:00am', close_time: '9:00pm', latitude: 40.748214, longitude: -73.988376)
# Restaurant.create!(name: 'Shake Shack', address: '22 W 38th Street', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/hamburgers.jpg', cuisine: 'American, Hamburgers...', delivery_minimum: 10, delivery_fee: 2.99, open_time: '11:00am', close_time: '9:00pm', latitude: 40.7512817, longitude: -73.9839901)
# Restaurant.create!(name: 'Moonstruck on Madison', address: '244 Madison Ave', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/sandwiches.jpg', cuisine: 'American, Diner...', delivery_minimum: 8, open_time: '11:00am', close_time: '9:00pm', latitude: 40.7501353, longitude: -73.9814878)
# Restaurant.create!(name: 'Kati Roll (39th st)', address: '22 W 38th Street', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/asian.jpg', cuisine: 'Indian, Lunch Specials...', delivery_minimum: 8, delivery_fee: 3.00, open_time: '11:00am', close_time: '9:00pm', latitude: 40.7512817, longitude: -73.9839901)
# Restaurant.create!(name: 'Eden Wok', address: '22 W 38th Street', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg', cuisine: 'Asian, Chinese...', delivery_minimum: 10, delivery_fee: 0.99, open_time: '11:00am', close_time: '9:00pm', latitude: 40.7512817, longitude: -73.9839901)
# Restaurant.create!(name: 'Marche Madison', address: '9 E 40th St', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/salads.jpg', cuisine: 'Deli, Sandwiches...', delivery_minimum: 10, open_time: '11:00am', close_time: '9:00pm', latitude: 40.7520094, longitude: -73.9809598)
# Restaurant.create!(name: 'Fresh Leaf', address: '58 W 36th St', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/salads.jpg', cuisine: 'Hamburgers, Healthy...', delivery_minimum: 0, open_time: '11:00am', close_time: '9:00pm', latitude: 40.750486, longitude: -73.9859299)
# Restaurant.create!(name: 'Koshe Poke', address: '22 W 38th Street', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/asian.jpg', cuisine: 'Hawaiin, Lunch Specials...', delivery_minimum: 10, delivery_fee: 0.99, open_time: '11:00am', close_time: '9:00pm', latitude: 40.7512817, longitude: -73.9839901)

#Upper East Side
#Use 215 e 86th St to find these restaurants

# Restaurant.create!(name: 'Hot & Crusty', address: '1276 Lexington Ave', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/sandwiches.jpg', cuisine: 'American, Sandwiches...', delivery_minimum: 6, open_time: '11:00am', close_time: '9:00pm', latitude: 40.779321, longitude: -73.9559352)
# Restaurant.create!(name: 'H & H Midtown Bagels East', address: '1551 2nd Ave', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/bagels.jpg', cuisine: 'Bagels, Bakery...', delivery_minimum: 10, delivery_fee: 2.00, open_time: '11:00am', close_time: '9:00pm', latitude: 40.7744509, longitude: -73.9545117)
# Restaurant.create!(name: 'Just Salad (Upper East Side)', address: '1471 3rd Ave', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/salads.jpg', cuisine: 'Salads, Healthy...', delivery_minimum: 10, delivery_fee: 1.99, open_time: '11:00am', close_time: '9:00pm', latitude: 40.778804, longitude: -73.956374)
# Restaurant.create!(name: 'Bareburger', address: '1681 1st Ave', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/hamburgers.jpg', cuisine: 'American, Hamburgers...', delivery_minimum: 15, delivery_fee: 2.50, open_time: '11:00am', close_time: '9:00pm', latitude: 40.777769, longitude: -73.9490931)
# Restaurant.create!(name: 'Pinkberry', address: '1577 2nd Ave', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/dessert.jpg', cuisine: 'Dessert, Ice Cream...', delivery_minimum: 10, delivery_fee: 2.69, open_time: '11:00am', close_time: '9:00pm', latitude: 40.7752378, longitude: -73.9540301)
# Restaurant.create!(name: 'Chopt Creative Salad Co.', address: '1376 3rd Ave', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/salads.jpg', cuisine: 'Salads, Healthy...', delivery_minimum: 0, delivery_fee: 2.99, open_time: '11:00am', close_time: '9:00pm', latitude: 40.7739057, longitude: -73.9580016)
# Restaurant.create!(name: 'Two Boots (UES)', address: '1617 2nd Ave', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/pizza.jpg', cuisine: 'Pizza, Lunch Specials...', delivery_minimum: 15, open_time: '11:00am', close_time: '9:00pm', latitude: 40.7765639, longitude: -73.952983)

# Downtown
# Use 426 Broome St to find these restaurants

# Restaurant.create!(name: 'Tenzan sushi', address: '82 2nd Ave', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/asian.jpg', cuisine: 'Asian, Japanese...', delivery_minimum: 10, delivery_fee: 1.00, open_time: '11:00am', close_time: '9:00pm', latitude: 40.7264547, longitude: -73.9888568)
# Restaurant.create!(name: 'Tribeca Bagels', address: '374 Canal Street', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/bagels.jpg', cuisine: 'Bagels, Breakfast...', delivery_minimum: 10, delivery_fee: 1.25, open_time: '11:00am', close_time: '9:00pm', latitude: 40.7208999, longitude: -74.0044202)
# Restaurant.create!(name: 'La Esquina Taqueria', address: '114 Kenmare Street', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/mexican.jpg', cuisine: 'Mexican, Lunch Specials...', delivery_minimum: 15, open_time: '11:00am', close_time: '9:00pm', latitude: 40.7213897, longitude: -73.9975913)
# Restaurant.create!(name: 'Breakroom', address: '83 Baxter Street', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/american.jpg', cuisine: 'American, Hamburgers...', delivery_minimum: 15, open_time: '11:00am', close_time: '9:00pm', latitude: 40.716654, longitude: -73.9996687)
# Restaurant.create!(name: 'Fresh Tortilla Express', address: '206 Varick Street', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/mexican.jpg', cuisine: 'Mexican, Lunch Specials...', delivery_minimum: 10, open_time: '11:00am', close_time: '9:00pm', latitude: 40.72867979, longitude: -74.0050937)
# Restaurant.create!(name: 'Fresh & Co.', address: '265 Canal Street', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/salads.jpg', cuisine: 'Salads, American...', delivery_minimum: 12, open_time: '11:00am', close_time: '9:00pm', latitude: 40.7190632, longitude: -74.0008623)
# Restaurant.create!(name: 'Nagomi Japanese Restaurant', address: '179 Prince Street', zip: ny_zips.sample, phone: "#{formatted_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/asian.jpg', cuisine: 'Asian, Japanese...', delivery_minimum: 20, delivery_fee: 2.00, open_time: '11:00am', close_time: '9:00pm', latitude: 40.7264183, longitude: -74.00194119)
