Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'react_portal#root'

  namespace :admin, defaults: {format: JSON } do
    resources :reviews
    resources :companies
    resources :image_carousels
  end

  namespace :json, defaults: {format: JSON} do
    resources :leaders
    resources :services
    resources :visitors
  end
end
