ActiveAdmin.register Company do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :name, :headline, :long_description, :short_description, :email_address, :phone_number, :created_at, :updated_at, :splash_image_url, :linkedin_url, :facebook_url, :about_image_url
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
            f.input :headline
            f.input :long_description, as: :quill_editor
            f.input :short_description
            f.input :email_address
            f.input :phone_number
            f.input :facebook_url
            f.input :linkedin_url
            f.input :about_image_url
        end
        f.actions
    end

    before_save do |company|
        unless params[:company].nil? || params[:company][:about_image_url].nil? || !params[:company][:about_image_url].include?('https://drive.google.com')
            company.about_image_url = "https://drive.google.com/uc?export=view&id" + params[:company][:about_image_url].split("id")[1]
        end
    end

end
