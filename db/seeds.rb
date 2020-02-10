# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'


# include Faker
I18n.reload!
ActiveRecord::Base.transaction do
    Book.destroy_all
    Library.destroy_all
    BookShelf.destroy_all
    User.destroy_all
    Review.destroy_all

    Book.create!(
        title: 'Romeo and Juliet',
        author: 'William Shakespeare',
        genre: 'Romance',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'romeo.jpeg',

    )

    Book.create!(
        title: 'The Tempest',
        author: 'William Shakespeare',
        genre: 'Comedy',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'tempest.jpeg',

    )

    Book.create!(
        title: 'A Midsummer Nights Dream',
        author: 'William Shakespeare',
        genre: 'Romance',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'midsummer.jpeg',

    )

    Book.create!(
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Fiction',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'gatsby.jpeg',

    )

    Book.create!(
        title: 'Moby Dick',
        author: 'Herman Melville',
        genre:'Nautical Fiction',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'moby.jpeg',

    )

      Book.create!(
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        genre: 'Fiction',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'catcher.jpeg',

    )

      Book.create!(
        title: 'Twilight',
        author: 'Stephenie Meyer',
        genre: 'Romance/Fantasy',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'Twilight.jpeg',

    )

      Book.create!(
        title: 'Eragon',
        author: 'Christopher Paolini',
        genre: 'Fantasy',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'eragon.jpeg',

    )

      Book.create!(
        title: 'Fifty Shades of Grey',
        author: 'E.L. James',
        genre:'Erotic Romance Novel',
        read: false,
        currently_reading: false, 
        want_to_read: false,
        url: 'fifty.jpeg',

    )
    10.times do
        User.create(
            first_name: Faker::Name.unique.first_name,
            last_name: Faker::Name.unique.last_name,
            email: Faker::Internet.email,
            password: '123456'
        )
    end

    100.times do 
        Book.create(
            title: Faker::Book.title,
            author: Faker::Book.author,
            genre: Faker::Book.genre,
            read: false, 
            currently_reading: false, 
            want_to_read: false,
            url: 'book.jpeg',
        )
    end

    100.times do
        Review.create(
            user_id: rand(1..10),
            book_id: rand(1..100),
            rating: rand(1..5),
            body: Faker::Quote.most_interesting_man_in_the_world,
            
        )
    end
    # User.create(first_name: 'Todd', last_name: 'McTodd', email: 'toddsonoftodd@todd.com', password: '123456')
    # Book.create(title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy', read: true, currently_reading: false, want_to_read: false )
    # Review.create(user_id: 1, book_id: 1, rating: 3, body: 'An ok book about a wizard boy with no parents ')
    Book.all.each do |book|
        
       shelf = BookShelf.create(
            user_id: rand(1..10),
            book_id: book.id,
            name: ["read", "want_to_read", "currently_reading"].shuffle.first
        )
        Library.create(book_id: book.id, shelf_id: shelf.id)
    end
    # BookShelf.create(user_id: 1, book_id: 1, name: "read")
    demo = User.create(
            first_name: 'Demo',
            last_name: 'Demo',
            email: 'demo',
            password: '123456')

end
