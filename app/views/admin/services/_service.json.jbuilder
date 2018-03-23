json.set! service.id do
    json.extract! service, :id, :name, :description, :icon_url, :other_image_url, :updated_at
end