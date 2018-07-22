@companies.each do |company|
    json.set! company.id do
        json.extract! company, :id, :name, :headline, :short_description, :long_description, :splash_image_url, :email_address, :phone_number, :facebook_url, :linkedin_url, :updated_at
    end
end