ActiveAdmin.register Review do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :reviewer_name, :reviewer_description, :reviewer_location, :title, :body, :logo_url, :created_at, :updated_at
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

    before_save do |review|
        unless params[:review].nil? || params[:review][:logo_url].nil? || !params[:review][:logo_url].include?('https://drive.google.com')
            review.logo_url = "https://drive.google.com/uc?export=view&id" + params[:review][:logo_url].split("id")[1]
        end
    end

end
