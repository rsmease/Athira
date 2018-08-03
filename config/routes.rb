Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'react_portal#root'

  namespace :json, defaults: {format: JSON} do
    resources :image_carousels
    resources :leaders
    resources :services
    resources :visitors
    resources :image_carousels
    resources :companies
    resources :reviews
    resources :terms
  end

  get '/.well-known/acme-challenge/0I6ywkUSWiaXyLRPlLJ49Ph9ltPK72mN8h76vRkdF5k' => 'encryptions#https_encryption'
end
