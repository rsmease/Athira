class Company < ApplicationRecord
    validates :name, :short_description, :long_description, :headline, :email_address, :phone_number, presence: true
end
