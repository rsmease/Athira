ActiveAdmin.register Term do

    permit_params :title, :text, :created_at, :updated_at

    form do |f|
        f.inputs do
            f.input :title
            f.input :text, as: :quill_editor
        end
        f.actions
    end
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
