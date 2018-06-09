class Admin::VisitorsController < ApplicationController
  def create 
    @visitor = Visitor.new(visitor_params)
    if @visitor.save 
        # VisitorMailer.with(visitor: @visitor).new_visitor.deliver_now
        VisitorMailer.with(visitor: @visitor).visitor.deliver_now
        render 'admin/visitors/show'
    else
        render json: @visitor.errors.full_messages, status: 422
    end
  end

  private

  def visitor_params
      params.require(:visitor).permit(:first_name, :last_name, :email_address, :phone_number, :message)
  end
end
