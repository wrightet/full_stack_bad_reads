class BookShelf < ApplicationRecord
    validates :name, presence: true
   

    belongs_to :user
    belongs_to :library
    has_many :books,
        through: :library,
        source: :books
end
