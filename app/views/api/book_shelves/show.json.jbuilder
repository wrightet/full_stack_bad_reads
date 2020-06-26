json.extract! @book_shelf, :id, :user_id, :name, :libraries, :user

json.books @book_shelf.books.each do |book|
    json.extract! book, :id, :title, :description, :author, :genre, :reviews
   

end

