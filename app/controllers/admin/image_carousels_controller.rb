class Admin::ImageCarouselsController < ApplicationController
    def index
        @image_carousels = ImageCarousel.all
        render 'admin/image_carousels/index'
    end

    def create 
        @image_carousel = ImageCarousel.new(image_carousel_params)
        if @image_carousel.save 
            render 'admin/image_carousels/show'
        else
            render json: @image_carousel.errors.full_messages, status: 422
        end
    end

    def show
        @image_carousel = ImageCarousel.find(params[:id])
        render 'admin/image_carousels/show'
    end

    def update
        @image_carousel = ImageCarousel.find(params[:id])
        if @image_carousel.update(image_carousel_params)
            render 'admin/image_carousels/show'
        else
            render json: @image_carousel.errors.full_messages, status: 422
        end
    end

    def destroy
        @image_carousel = image_carousel.find(params[:id])
        if @image_carousel.destroy
            render plain: "image_carousel '#{@image_carousel.location}' has been deleted"
        else
            render plain: "image_carousel '#{@image_carousel.location}' does not exist in the database"
        end
    end

    private
    def image_carousel_params
        params.require(:image_carousel).permit(:location, :urls)
    end
end
