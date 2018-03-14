@reviews.each do |review|
  json.set! review.id do
    json.set! :first_name, review.user.first_name
    json.set! :rating, review.rating
    json.set! :review, review.review
  end
end
