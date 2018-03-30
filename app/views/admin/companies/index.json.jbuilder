@companies.each do |company|
    json.set! company.id do
        json.extract! company, :id, :name, :headline, :short_description, :long_description, :updated_at
    end
end