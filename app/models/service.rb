class Service < ApplicationRecord
    validates :name, :short_description, :long_description, presence: true
end
