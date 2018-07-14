class ImageCarousel < ApplicationRecord
    validates :location, :urls, :headline, presence: true

    def serialized_urls
        self.urls.join("\n\n")
    end
end
