class Json::ImageCarouselsController < ApplicationController
  def index
    @image_carousels = ImageCarousel.all
    render 'json/image_carousels/index'
end

def show
    @image_carousel = ImageCarousel.find(params[:id])
    render 'json/image_carousels/show'
end

private
  def image_carousel_params
      params.require(:image_carousel).permit(:location, :urls, :headline)
  end
end
