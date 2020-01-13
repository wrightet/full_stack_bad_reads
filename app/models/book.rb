class Book < ApplicationRecord
    validates :title, :author, :genre, presence: true
    validates :read, :currently_reading, :want_to_read, 
    inclusion: {in: [true, false], message: "value must be true or false"}

   has_many :reviews
   has_many :libraries,
        foreign_key: :book_id,
        class_name: 'Library'

   has_many :book_shelves,
    through: :library,
    source: :book_shelf

    
    
end
