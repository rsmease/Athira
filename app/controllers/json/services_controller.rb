class Json::ServicesController < ApplicationController
  def index
    @services = Service.all
    render 'json/services/index'
end

def show
    @service = Service.find(params[:id])
    render 'json/services/show'
end

private
  def service_params
      params.require(:service).permit(:name, :short_description, :long_description, :icon_url, :other_image_url)
  end
end
