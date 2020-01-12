class CreateBookShelves < ActiveRecord::Migration[5.2]
  def change
    create_table :book_shelves do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.string :name, null: false
      t.timestamps
    end
    add_index :book_shelves, :user_id
    add_index :book_shelves, :book_id
  end
end
