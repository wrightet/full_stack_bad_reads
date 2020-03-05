class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.all
    end

    def show
        @review = Review.find_by(params[:user_id])
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
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

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render :show

    end

    private
    def review_params
        params.require(:review).permit(:user_id, :book_id, :rating, :body)
    end

  

end
