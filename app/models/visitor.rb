class Visitor < ApplicationRecord
  validates :first_name, :last_name, :message, :email_address, presence: true
  validates :email_address, email: true
end
