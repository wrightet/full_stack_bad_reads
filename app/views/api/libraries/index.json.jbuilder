 @libraries.each do |library|
    json.set! library.id do
        json.extract! library, :book_id, :shelf_id
    end
end