# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Faker::Config.locale = 'en-US'


User.create(first_name: 'Guest', last_name: 'Demo', email: 'guest@food.com', password: 'guestdemo')
User.create(first_name: 'Jason', last_name: 'Numeroff', email: 'jnumeroff@hotmail.com', password: 'starwars')

# Restaurant.create(name: 'Chopt Creative Salad Co.', address: '350 Fifth Ave, New York', phone:'(929) 273-1656', img_url: '/', cuisine: 'salads', delivery_minimum: 15, delivery_fee: 2.99, open_time: '10:45:00', close_time: '21:00:00')

# Restaurant.create!(name: 'Joel Robuchon', address: '3799 S Las Vegas Blvd, Las Vegas', phone:'(929) 273-1656', img_url: '/', cuisine: 'salads', delivery_minimum: 15, delivery_fee: 2.99, open_time: '10:45:00', close_time: '21:00:00', latitude: 0, longitude: 0)

# Midtown
#Use 22 w 38th St to find these restaurants

Restaurant.create!(name: 'Hong Kong Station', address: '22 W 38th Street, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg', cuisine: 'Asian, Dim Sum...', delivery_minimum: 10, open_time: '11:00:00', close_time: '21:00:00', latitude: 40.7512817, longitude: -73.9839901)
Restaurant.create!(name: 'Speedy\'s', address: '1271 Broadway Ave, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg', cuisine: 'American, Hamburgers...', delivery_minimum: 10, delivery_fee: 1.50, open_time: '11:00:00', close_time: '21:00:00', latitude: 40.748214, longitude: -73.988376)
Restaurant.create!(name: 'Shake Shack', address: '22 W 38th Street, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg', cuisine: 'American, Hamburgers...', delivery_minimum: 10, delivery_fee: 2.99, open_time: '11:00:00', close_time: '21:00:00', latitude: 40.7512817, longitude: -73.9839901)
Restaurant.create!(name: 'Moonstruck on Madison', address: '244 Madison Ave, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg', cuisine: 'American, Diner...', delivery_minimum: 8, open_time: '11:00:00', close_time: '21:00:00', latitude: 40.7501353, longitude: -73.9814878)
Restaurant.create!(name: 'Kati Roll (39th st)', address: '22 W 38th Street, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg', cuisine: 'Indian, Lunch Specials...', delivery_minimum: 8, delivery_fee: 3.00, open_time: '11:00:00', close_time: '21:00:00', latitude: 40.7512817, longitude: -73.9839901)
Restaurant.create!(name: 'Eden Wok', address: '22 W 38th Street, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg', cuisine: 'Asian, Chinese...', delivery_minimum: 10, delivery_fee: 0.99, open_time: '11:00:00', close_time: '21:00:00', latitude: 40.7512817, longitude: -73.9839901)
Restaurant.create!(name: 'Marche Madison', address: '9 E 40th St, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg', cuisine: 'Deli, Sandwiches...', delivery_minimum: 10, open_time: '11:00:00', close_time: '21:00:00', latitude: 40.7520094, longitude: -73.9809598)
Restaurant.create!(name: 'Fresh Leaf', address: '58 W 36th St, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg', cuisine: 'Hamburgers, Healthy...', delivery_minimum: 0, open_time: '11:00:00', close_time: '21:00:00', latitude: 40.750486, longitude: -73.9859299)
Restaurant.create!(name: 'Koshe Poke', address: '22 W 38th Street, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg', cuisine: 'Hawaiin, Lunch Specials...', delivery_minimum: 10, delivery_fee: 0.99, open_time: '11:00:00', close_time: '21:00:00', latitude: 40.7512817, longitude: -73.9839901)

#Upper East Side
#Use 215 e 86th St to find these restaurants

Restaurant.create!(name: 'Hot & Crusty', address: '1276 Lexington Ave, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg', cuisine: 'American, Sandwiches...', delivery_minimum: 6, open_time: '11:00:00', close_time: '21:00:00', latitude: 40.779321, longitude: -73.9559352)
Restaurant.create!(name: 'H & H Midtown Bagels East', address: '1551 2nd Ave, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg', cuisine: 'Bagels, Bakery...', delivery_minimum: 10, delivery_fee: 2.00, open_time: '11:00:00', close_time: '21:00:00', latitude: 40.7744509, longitude: -73.9545117)
Restaurant.create!(name: 'Just Salad (Upper East Side)', address: '1471 3rd Ave, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg', cuisine: 'Salads, Healthy...', delivery_minimum: 10, delivery_fee: 1.99, open_time: '11:00:00', close_time: '21:00:00', latitude: 40.778804, longitude: -73.956374)
Restaurant.create!(name: 'Bareburger', address: '1681 1st Ave, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: 'https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/lunch-specials.jpg', cuisine: 'American, Hamburgers...', delivery_minimum: 15, delivery_fee: 2.50, open_time: '11:00:00', close_time: '21:00:00', latitude: 40.778804, longitude: -73.956374)
