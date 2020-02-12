
@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :book_id, :user_id, :body, :rating
    end
end
