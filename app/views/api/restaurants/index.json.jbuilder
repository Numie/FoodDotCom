@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.merge! restaurant.attributes
  end
end
