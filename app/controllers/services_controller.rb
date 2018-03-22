class ServicesController < ApplicationController
    def index
        @services = Service.all
        render 'admin/services/index'
    end

    def create 
        @service = Service.new(service_params)
        if @service.save 
            render 'admin/services/show'
        else
            render json: @service.errors.full_messages, status: 422
        end
    end

    def show
        @service = Service.find(params[:id])
        render 'admin/services/show'
    end

    def update
        @service = Service.find(params[:id])
        if @service.update(service_params)
            render 'admin/services/show'
        else
            render json: @service.errors.full_messages, status: 422
        end
    end

    def destroy
        @service = Service.find(params[:id])
        if @service.destroy
            render plain: "Service '#{params[:name]}' has been deleted"
        else
            render plain: "Service '#{params[:name]}' does not exist in the database"
        end
    end

    private
    def service_params
        params.require(:service).permit(:name, :description, :icon_url, :other_image_url)
    end
end
