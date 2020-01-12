class Library < ApplicationRecord
    has_many :books
    has_many :shelves,
        foreign_key: :shelf_id,
        class_name: 'BookShelf'
        
end
