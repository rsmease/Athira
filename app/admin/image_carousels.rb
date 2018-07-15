ActiveAdmin.register ImageCarousel do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
    permit_params :location, :urls, :created_at, :updated_at, :headline
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
            f.input :location
            f.input :headline
            f.inputs "Carousel URLs" do
                f.input :serialized_urls, :as => :text, hint: "HINT: Save each URL on a separate line, separated by a line."
            end
        end
        f.actions
    end

    before_save do |image_carousel|
        unless params[:image_carousel].nil? || params[:image_carousel][:serialized_urls].nil?
            image_carousel.urls = params[:image_carousel][:serialized_urls].split("\r\n\r\n").map do |url|
                if url.include?('https://drive.google.com')
                    url = "http://drive.google.com/uc?export=view&id" + url.split("id")[1] 
            end
        end
    end
end
