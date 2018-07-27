class Json::TermsController < ApplicationController
    def index
        @terms = Term.all
        render 'json/terms/index'
    end

    def show
        @term = Term.find(params[:id])
        render 'json/terms/show'
    end

    private

    def term_params
        params.require(:term).permit(:title, :text)
    end
end
