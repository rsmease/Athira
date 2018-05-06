class ImageCarousel < ApplicationRecord
    validates :location, :urls, presence: true
end
