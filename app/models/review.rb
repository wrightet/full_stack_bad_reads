class Review < ApplicationRecord
    validates :rating, inclusion: {in: [1..5], allow_nil: true}
    validates :body, allow_blank: true
    belongs_to :book
    belongs_to :user
end
