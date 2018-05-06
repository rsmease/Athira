class ImageCarousel < ApplicationRecord
    validates :location, :urls, :headline, presence: true
end
