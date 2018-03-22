class Service < ApplicationRecord
    validates :name, :description, presence: true
end
