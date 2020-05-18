 @libraries.each do |library|
    json.set! library.id do
        json.extract! library, :book_id, :shelf_id, :add_book, :remove_book, :book, :book_shelf
    end
end