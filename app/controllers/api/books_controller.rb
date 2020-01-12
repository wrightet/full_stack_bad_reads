class Api::BooksController < ApplicationController
    def index
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
            reder json: @book.errors.full_messages, status: 422
        end

    end

    private
    def book_params
        params.require(:book).permit(:title, :author, :genre, :read, :currently_reading,
        :want_to_read)
    end
end
