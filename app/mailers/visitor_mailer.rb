class VisitorMailer < ApplicationMailer
  def new_visitor()
    @visitor = {
      nickname: 'ryan',
      username: 'rsmease'
    }
    mail(to: 'rsmease@gmail.com', subject: 'Welcome to My Awesome Site')
  end
end
