class VisitorMailer < ApplicationMailer
  def visitor
    @visitor = params[:visitor]
    email_title = 'Athira, you have a New Message from ' + @visitor.first_name + ' ' + @visitor.last_name + ' sent at ' + Time.now.to_s
    mail(to: 'rsmease@gmail.com', subject: email_title)
  end
end
