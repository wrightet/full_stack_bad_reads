class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.integer :rating, optional: true, inclusion: 1..5
      t.text :body, optional: true
      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :book_id
  end
end
