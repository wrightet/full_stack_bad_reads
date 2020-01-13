# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_13_191520) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "book_shelves", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "book_id", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_book_shelves_on_book_id"
    t.index ["user_id"], name: "index_book_shelves_on_user_id"
  end

  create_table "books", force: :cascade do |t|
    t.string "title", null: false
    t.string "author", null: false
    t.string "genre", null: false
    t.boolean "read", default: false
    t.boolean "currently_reading", default: false
    t.boolean "want_to_read", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "url"
    t.index ["author"], name: "index_books_on_author"
    t.index ["genre"], name: "index_books_on_genre"
    t.index ["title"], name: "index_books_on_title"
  end

  create_table "libraries", force: :cascade do |t|
    t.integer "book_id", null: false
    t.integer "shelf_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_libraries_on_book_id"
    t.index ["shelf_id"], name: "index_libraries_on_shelf_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "book_id", null: false
    t.integer "rating"
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_reviews_on_book_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
