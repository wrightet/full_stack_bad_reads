json.extract! @book_shelf, :id, :user_id, :name, :libraries, :user, :photos

json.books @book_shelf.books.each do |book|
    json.extract! book, :id, :title, :description, :author, :genre
    json.photoURL url_for(book.photo)

end

