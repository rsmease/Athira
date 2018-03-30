class Admin::LeadersController < ApplicationController
    def index
        @leaders = Leader.all
        render 'admin/leaders/index'
    end

    def create 
        @leader = Leader.new(leader_params)
        if @leader.save 
            render 'admin/leaders/show'
        else
            render json: @leader.errors.full_messages, status: 422
        end
    end

    def show
        @leader = Leader.find(params[:id])
        render 'admin/leaders/show'
    end

    def update
        @leader = Leader.find(params[:id])
        if @leader.update(leader_params)
            render 'admin/leaders/show'
        else
            render json: @leader.errors.full_messages, status: 422
        end
    end

    def destroy
        @leader = Leader.find(params[:id])
        if @leader.destroy
            render plain: "Leader '#{params[:name]}' has been deleted"
        else
            render plain: "Leader '#{params[:name]}' does not exist in the database"
        end
    end

    private
    def leader_params
        params.require(:leader).permit(:name, :description, :title, :headshot_url)
    end
end
