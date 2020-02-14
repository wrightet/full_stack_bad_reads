class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.all
        # old_reviews = Reviews.all
        # @book = Book.find(params[:id])
        # @reviews = []
        # old_reviews.each do |review|
        #     if review.book.id == @book.id
        #         @reviews << review
        #     end
        # end
        # return @reviews
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            redirect_to :index
        else
            render json: @review.errors.full_messages, status: 422
        end

    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :index
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    # def destroy
    #     @review.destroy

    # end

    private
    def review_params
        params.require(:review).permit(:user_id, :book_id, :rating, :body)
    end

    def book_params
        params.require(:book).permit(:id, :title, :author, :genre, :url, :description, :read, :currently_reading,
        :want_to_read)
    end
end
