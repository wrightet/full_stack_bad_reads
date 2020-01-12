class Book < ApplicationRecord
    validates :title, :author, :genre, presence: true
    validates :read, :currenly_reading, :want_to_read, 
    inclusion: {in: [true, false], message: "value must be true or false"}

   has_many :reviews
   belongs_to :library
   has_many :book_shelves,
    through: :library,
    source: :shelves

    
    
end
