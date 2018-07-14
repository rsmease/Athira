class Json::CompaniesController < ApplicationController
  def index
      @companies = Company.all
      render 'json/companies/index'
  end

  def show
      @company = Company.find(params[:id])
      render 'json/companies/show'
  end

  private
  def company_params
      params.require(:company).permit(:name, :short_description, :long_description, :headline, :email_address, :phone_number)
  end
end
