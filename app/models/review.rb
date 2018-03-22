class Review < ApplicationRecord
    validates :title, :body, presence: true
end
