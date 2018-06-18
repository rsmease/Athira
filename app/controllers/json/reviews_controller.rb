class Json::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    render 'json/reviews/index'
  end

  def show
      @review = Review.find(params[:id])
      render 'json/reviews/show'
  end

  private
  def review_params
      params.require(:review).permit(:title, :body, :reviewer_name, :reviewer_location, :reviewer_description, :other_image_url)
  end
end
