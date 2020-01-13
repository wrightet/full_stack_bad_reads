class Review < ApplicationRecord
  
    validates :rating, inclusion: {in: [1..5], allow_nil: true}
    # validates :body, allow_nil: true
    # validates :body, allow_blank: true
    
    belongs_to :book,
        foreign_key: :book_id,
        class_name: 'Book'
    belongs_to :user,
        foreign_key: :user_id,
        class_name: 'User'
end
