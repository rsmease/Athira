ActiveAdmin.register Leader do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :name, :title, :description, :headshot_url, :created_at, :updated_at
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
            f.input :title
            f.input :description, as: :quill_editor
            f.input :headshot_url
        end
        f.actions
    end

    before_save do |leader|
        unless params[:leader].nil? || params[:leader][:headshot_url].nil? || !params[:leader][:headshot_url].includes?('http://drive.google.com')
            leader.headshot_url = "http://drive.google.com/uc?export=view&id" + params[:leader][:headshot_url].split("id")[1]
        end
    end
end
