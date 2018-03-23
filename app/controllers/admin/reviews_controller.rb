class Admin::ReviewsController < ApplicationController
    def index
        @reviews = Review.all
        render 'admin/reviews/index'
    end

    def create 
        @review = Review.new(review_params)
        if @review.save 
            render 'admin/reviews/show'
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show
        @review = Review.find(params[:id])
        render 'admin/reviews/show'
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render 'admin/reviews/show'
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review.destroy
            render plain: "review '#{@review.title}' has been deleted"
        else
            render plain: "review '#{@review.title}' does not exist in the database"
        end
    end

    private
    def review_params
        params.require(:review).permit(:title, :body, :reviewer_name, :reviewer_location, :reviewer_description, :other_image_url)
    end
end

