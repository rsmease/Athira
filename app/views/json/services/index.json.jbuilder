@services.each do |service|
    json.set! service.id do
        json.extract! service, :id, :name, :short_description, :long_description, :icon_url, :other_image_url, :updated_at
    end
end

