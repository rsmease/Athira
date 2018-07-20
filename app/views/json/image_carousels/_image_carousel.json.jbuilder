json.set! image_carousel.id do
    json.extract! image_carousel, :id, :location, :urls, :headlines, :updated_at
end