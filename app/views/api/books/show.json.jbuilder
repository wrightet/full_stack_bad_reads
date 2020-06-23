json.extract! @book, :id, :title, :author, :genre, :read, 
        :currently_reading, :want_to_read, :url, :description, :reviews, :libraries, :photo
        json.photoURL url_for(book.photo)
