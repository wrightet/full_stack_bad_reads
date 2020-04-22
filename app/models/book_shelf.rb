class BookShelf < ApplicationRecord
    validates :name, presence: true


    belongs_to :user

    has_many :libraries,
        foreign_key: :shelf_id,
        class_name: 'Library'

    has_many :books,
        through: :libraries,
        source: :book
end
