Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'react_portal#root'

  namespace :admin, defaults: {format: JSON } do
    resources :services
    resources :reviews
    resources :companies
    resources :leaders
  end
end
