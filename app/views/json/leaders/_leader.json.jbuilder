json.set! leader.id do
    json.extract! leader, :id, :name, :title, :description, :headshot_url, :updated_at
end