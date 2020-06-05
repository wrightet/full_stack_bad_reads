class Api::BookShelvesController < ApplicationController

    def index
        @book_shelves = current_user.book_shelves
    end

    def show
        @book_shelf = BookShelf.find(params[:id])
    end

    def create
        
        @book_shelf = BookShelf.new(book_shelf_params)
        
        if @book_shelf.save
            render :show
        else
            render json: @book_shelf.errors.full_messages, status: 422
        end
    end

    def update
        @book_shelf = BookShelf.find(params[:id])
        if @book_shelf.update(book_shelf_params)
            render :show
        else
            render json: @book_shelf.errors.full_messages, status: 422
        end
    end

    def destroy
        @book_shelf = BookShelf.find(params[:id])
        names = ['read', 'want to read', 'currently reading']
        if !names.include?(@book_shelf.name)
            @book_shelf.destroy
            render :show
        end
    end

    private
    def book_shelf_params
        params.require(:shelf).permit(:id, :name, :user_id)
    end
end
