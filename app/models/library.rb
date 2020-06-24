class Library < ApplicationRecord
   validates :book_id, uniqueness: { scope: :shelf_id }
    belongs_to :book,
        foreign_key: :book_id,
        class_name: 'Book'
        
    belongs_to :book_shelf,
        foreign_key: :shelf_id,
        class_name: 'BookShelf'
        
    # has_one :photo,
    #     through: :book,
    #     source: :photo
end
