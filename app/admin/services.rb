ActiveAdmin.register Service do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :name, :short_description, :icon_url, :other_image_url, :created_at, :updated_at, :long_description
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

form do |f|
f.inputs do
    f.input :name
    f.input :short_description
    f.input :long_description, as: :quill_editor
    f.input :icon_url
    f.input :other_image_url
end
f.actions
end

end
