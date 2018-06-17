@image_carousels.each do |image_carousel|
    json.set! image_carousel.id do
        json.extract! image_carousel, :id, :location, :urls, :updated_at
    end
end
