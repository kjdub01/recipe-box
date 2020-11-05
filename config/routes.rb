Rails.application.routes.draw do
  #resources :ingredients
  root to: 'application#index'
  resources :recipes
    resources :ingredients
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
