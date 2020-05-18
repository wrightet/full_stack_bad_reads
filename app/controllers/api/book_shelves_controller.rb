class Api::BookShelvesController < ApplicationController

    def index
        p 'shelves index'
        @book_shelves = current_user.book_shelves
    end

    def show
        p 'you are hitting the show route'
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
        @book_shelf.destroy
        render :show
    end

    # def add_book
    #     book_shelf = BookShelf.new(
    #         book_id: params[:book_id],
    #         shelf_id: params[:shelf_id]
    #     )
    #     if book_shelf.save
    #         render json: book_shelf, status: :created
    #     else
    #         render json: book_shelf.errors.full_messages, status: :unprocssable_entity
    #     end
    # end

    # def remove_book
    #     shelf = BookShelf.find_by(
    #         book_id: params[:book_id],
    #         shelf_id: params[:shelf_id]
    #     )
    #     shelf.destroy
    #     render json: shelf
    # end

    private
    def book_shelf_params
        params.require(:book_shelf).permit(:id, :name, :user_id)
    end
end
