json.set! visitor.id do
  json.extract! visitor, :id, :first_name, :last_name, :email_address, :message, :phone_number
end
