class Admin::CompaniesController < ApplicationController
        def index
        @companies = Company.all
        render 'admin/companies/index'
    end

    def create 
        @company = Company.new(company_params)
        if @company.save 
            render 'admin/companies/show'
        else
            render json: @company.errors.full_messages, status: 422
        end
    end

    def show
        @company = Company.find(params[:id])
        render 'admin/companies/show'
    end

    def update
        @company = Company.find(params[:id])
        if @company.update(company_params)
            render 'admin/companies/show'
        else
            render json: @company.errors.full_messages, status: 422
        end
    end

    def destroy
        @company = Company.find(params[:id])
        if @company.destroy
            render plain: "Company '#{params[:name]}' has been deleted"
        else
            render plain: "Company '#{params[:name]}' does not exist in the database"
        end
    end

    private
    def company_params
        params.require(:company).permit(:name, :short_description, :long_description, :headline)
    end
end
