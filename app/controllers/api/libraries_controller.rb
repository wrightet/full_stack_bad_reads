class Api::LibrariesController < ApplicationController

    def create
        @library = Library.new(library_params)

        if @library.save
            render :show
        else
            render json: @library.errors.full_messages, status: 422
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
