# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: 'Guest', last_name: 'Demo', email: 'guest@food.com', password: 'guestdemo')
User.create(first_name: 'Jason', last_name: 'Numeroff', email: 'jnumeroff@hotmail.com', password: 'starwars')

# Restaurant.create(name: 'Chopt Creative Salad Co.', address: '350 Fifth Ave, New York', phone:'(929) 273-1656', img_url: '/', cuisine: 'salads', delivery_minimum: 15, delivery_fee: 2.99, open_time: '10:45:00', close_time: '21:00:00')

# Restaurant.create!(name: 'Joel Robuchon', address: '3799 S Las Vegas Blvd, Las Vegas', phone:'(929) 273-1656', img_url: '/', cuisine: 'salads', delivery_minimum: 15, delivery_fee: 2.99, open_time: '10:45:00', close_time: '21:00:00', latitude: 0, longitude: 0)

Restaurant.create!(name: 'Joel Robuchon2', address: '3799 S Las Vegas Blvd, Las Vegas', phone:'(929) 273-1656', img_url: '/', cuisine: 'salads', delivery_minimum: 15, delivery_fee: 2.99, open_time: '10:45:00', close_time: '21:00:00', latitude: 0, longitude: 0)
