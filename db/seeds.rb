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

Restaurant.create!(name: 'Hong Kong Station', address: '22 W 38th Street, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: '/', cuisine: 'Asian, Dim Sum...', delivery_minimum: 10, open_time: '11:00:00', close_time: '21:00:00', latitude: 0, longitude: 0)
Restaurant.create!(name: 'Speedy\'s', address: '22 W 38th Street, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: '/', cuisine: 'American, Hamburgers...', delivery_minimum: 10, delivery_fee: 1.50, open_time: '11:00:00', close_time: '21:00:00', latitude: 0, longitude: 0)
Restaurant.create!(name: 'Shake Shack', address: '22 W 38th Street, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: '/', cuisine: 'American, Hamburgers...', delivery_minimum: 10, delivery_fee: 2.99, open_time: '11:00:00', close_time: '21:00:00', latitude: 0, longitude: 0)
Restaurant.create!(name: 'Moonstruck on Madison', address: '22 W 38th Street, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: '/', cuisine: 'American, Diner...', delivery_minimum: 8, open_time: '11:00:00', close_time: '21:00:00', latitude: 0, longitude: 0)
Restaurant.create!(name: 'Kati Roll (39th st)', address: '22 W 38th Street, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: '/', cuisine: 'Indian, Lunch Specials...', delivery_minimum: 8, delivery_fee: 3.00, open_time: '11:00:00', close_time: '21:00:00', latitude: 0, longitude: 0)
Restaurant.create!(name: 'Eden Wok', address: '22 W 38th Street, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: '/', cuisine: 'Asian, Chinese...', delivery_minimum: 10, delivery_fee: 0.99, open_time: '11:00:00', close_time: '21:00:00', latitude: 0, longitude: 0)
Restaurant.create!(name: 'Marche Madison', address: '22 W 38th Street, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: '/', cuisine: 'Deli, Sandwiches...', delivery_minimum: 10, open_time: '11:00:00', close_time: '21:00:00', latitude: 0, longitude: 0)
Restaurant.create!(name: 'Fresh Leaf', address: '22 W 38th Street, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: '/', cuisine: 'Hamburgers, Healthy...', delivery_minimum: 0, open_time: '11:00:00', close_time: '21:00:00', latitude: 0, longitude: 0)
Restaurant.create!(name: 'Koshe Poke', address: '22 W 38th Street, New York', phone: "#{Faker::PhoneNumber.cell_phone}", img_url: '/', cuisine: 'Hawaiin, Lunch Specials...', delivery_minimum: 10, delivery_fee: 0.99, open_time: '11:00:00', close_time: '21:00:00', latitude: 0, longitude: 0)
