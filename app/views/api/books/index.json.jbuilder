@books.each do |book|
    json.set! book.id do
        json.extract! book, :id, :title, :author, :genre, :read, 
        :currently_reading, :want_to_read, :url, :description, :libraries, :reviews,
        :photo
        json.photoURL url_for(book.photo)
        
        
    end
end