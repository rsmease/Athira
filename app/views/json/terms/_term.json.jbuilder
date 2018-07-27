json.set! term.id do
    json.extract! term, :id, :title, :text, :updated_at
end