Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'react_portal#root'

  namespace :admin, defaults: {format: JSON } do
    resources :services
    resources :reviews
    resources :companies
    resources :leaders
    resources :image_carousels
    resources :visitors
  end
end
