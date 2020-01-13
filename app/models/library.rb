class Library < ApplicationRecord
    
    belongs_to :book,
        foreign_key: :book_id,
        class_name: 'Book'
    belongs_to :book_shelf,
        foreign_key: :shelf_id,
        class_name: 'BookShelf'
        
end
