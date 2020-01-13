# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Book.destroy_all
Library.destroy_all
BookShelf.destroy_all
User.destroy_all
Review.destroy_all
User.create(first_name: 'Todd', last_name: 'McTodd', email: 'toddsonoftodd@todd.com', password: '123456')
Book.create!(title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy', read: true, currently_reading: false, want_to_read: false )
Review.create(user_id: 1, book_id: 1, rating: 3, body: 'An ok book about a wizard boy with no parents ')
BookShelf.create(user_id: 1, book_id: 1, name: "read")
Library.create!(book_id: 1, shelf_id: 1)
