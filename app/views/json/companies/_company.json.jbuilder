json.set! company.id do
    json.extract! company, :id, :name, :headline, :short_description, :long_description, :splash_image_url, :email_address, :phone_number, :updated_at, :facebook_url, :linkedin_url, :about_image_url
end