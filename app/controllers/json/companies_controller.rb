class Json::CompaniesController < ApplicationController
  def index
      @companies = Company.all
      render 'admin/companies/index'
  end

  def show
      @company = Company.find(params[:id])
      render 'admin/companies/show'
  end

  private
  def company_params
      params.require(:company).permit(:name, :short_description, :long_description, :headline)
  end
end
