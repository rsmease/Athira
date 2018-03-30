class Leader < ApplicationRecord
    validates :name, :title, :description, :headshot_url, presence: true
end
