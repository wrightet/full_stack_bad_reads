@book_shelves.each do |shelf|
    json.set! shelf.id do 
        json.extract! shelf, :id, :user_id, :book_id, :name
    end
end