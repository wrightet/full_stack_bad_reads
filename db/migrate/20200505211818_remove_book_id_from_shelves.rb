class RemoveBookIdFromShelves < ActiveRecord::Migration[5.2]
  def change
    remove_column :book_shelves, :book_id, :integer
  end
end
