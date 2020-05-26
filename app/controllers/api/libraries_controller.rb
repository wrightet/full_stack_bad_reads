class Api::LibrariesController < ApplicationController
    def show
        @library = Library.find(params[:id])
    end
    def create
        @library = Library.new(library_params)

        if @library.save
            render :show
        else
            render json: @library.errors.full_messages, status: 422
        end 
    end

    def update
        @library = Library.find(params[:id])
        if @library.update(library_params)
            render :show
        else
            render json: @libary.error.full_messages, status: 422
        end
    end
    
    def destroy
        @library = Library.find(params[:id])
        @library.destroy
        render :show
    end

    private
    def library_params
        params.require(:library).permit(:book_id, :shelf_id)
    end
end

    #  def add_book
    #     book_shelf = Library.new(
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
    #     shelf = Library.find_by(
    #         book_id: params[:book_id],
    #         shelf_id: params[:shelf_id]
    #     )
    #     shelf.destroy
    #     render json: shelf
    # end
