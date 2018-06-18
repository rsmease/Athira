json.set! review.id do
    json.extract! review, :id, :title, :body, :reviewer_name, :reviewer_description, :reviewer_location, :other_image_url, :updated_at
end