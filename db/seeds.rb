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

User.destroy_all
User.create(first_name: 'Guest', last_name: 'Demo', email: 'guest@food.com', password: 'guestdemo')
User.create(first_name: 'Jason', last_name: 'Numeroff', email: 'jnumeroff@hotmail.com', password: 'starwars')
200.times do
  User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.unique.email, password: 'starwars')
end

Restaurant.destroy_all
300.times do
  Restaurant.create!(name: NAMES.sample, address: Faker::Address.street_address,
    zip: random_manhattan_zip, phone: formatted_phone, img_url: INDEX_IMAGE_URLS.sample,
    cuisine: 'Asian, Dim Sum...', delivery_minimum: [0, 0, 0, 8, 10, 10, 12, 15, 15].sample,
    delivery_fee: [0, 0, 0, 1, 1.99, 2, 2.99, 3.99, 5].sample, open_time: '11:00am', close_time: '9:00pm',
    latitude: random_manhattan_latitude, longitude: random_manhattan_longitude)
end

restaurant_ids = Restaurant.all.pluck(:id).to_a

def random_descripion
  ingredients = []
  num_ingredients = (3..7).to_a.sample
  num_ingredients.times do
    ingredients << Faker::Food.ingredient
  end
  ingredients_string = ingredients.join(", ")
  "Prepared with #{ingredients_string}."
end

def random_price
  rand * (30 - 8) + 8
end

MenuItem.destroy_all
restaurant_ids.each do |id|
  20.times do
    MenuItem.create!(restaurant_id: id, name: Faker::Food.dish, description: random_descripion, price: random_price)
  end
end

Review.destroy_all
restaurant_ids.each do |id|
  3.times do
    Review.create!(user_id: User.all.pluck(:id).sample, restaurant_id: id, rating: [1, 2, 3, 4, 5].sample, review: Faker::ChuckNorris.fact)
  end
end
