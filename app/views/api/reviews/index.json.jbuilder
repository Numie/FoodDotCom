@reviews.each do |review|
  json.set! review.id do
    json.merge! review.attributes
  end
end
