class CreateLibraries < ActiveRecord::Migration[5.2]
  def change
    create_table :libraries do |t|
      t.integer :book_id, null: false
      t.integer :shelf_id, null: false
      t.timestamps
    end
    add_index :libraries, :shelf_id
    add_index :libraries, :book_id
  end
end
