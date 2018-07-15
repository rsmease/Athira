class ImageCarousel < ApplicationRecord
    validates :location, :urls, :headline, presence: true

    def serialized_urls
        url_ids = self.urls.map { |url| url.include("id") ? url.split("id")[1] : url }
        url_ids.join("\n\n")
    end
end
