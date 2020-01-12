class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.string :genre, null: false
      t.boolean :read, default: false
      t.boolean :currently_reading, default: false
      t.boolean :want_to_read, default: false
      t.timestamps
    end
    add_index :books, :title
    add_index :books, :author
    add_index :books, :genre
  end
end
