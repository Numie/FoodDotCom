json.array! @reviews do |review|
  json.set! :id, review.id
  json.set! :first_name, review.user.first_name
  json.set! :rating, review.rating
  json.set! :review, review.review
end
