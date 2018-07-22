class Company < ApplicationRecord
    validates :name, :short_description, :long_description, :headline, presence: true
end
