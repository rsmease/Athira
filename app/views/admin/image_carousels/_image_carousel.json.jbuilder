json.set! image_carousel.id do
    json.extract! image_carousel, :id, :location, :urls, :headline, :updated_at
end