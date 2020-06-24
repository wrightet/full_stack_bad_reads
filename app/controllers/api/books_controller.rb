class Api::BooksController < ApplicationController
    def index
        p 'this is the books controller index'
        @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
        
    end

    def create
        @book = Book.new(book_params)

        if @book.save
            render :show
        else
            render json: @book.errors.full_messages, status: 422
        end

    end

    def update
        @book = Book.find(params[:id])
        if @book.update(book_params)
            render :show
        else
             render json: @book.errors.full_messages, status: 422
        end
    end


    private
    def book_params
        params.require(:book).permit(:id, :title, :author, :genre, :url, :description, :read, :currently_reading,
        :want_to_read)
    end
end
