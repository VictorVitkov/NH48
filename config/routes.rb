Rails.application.routes.draw do
  root 'mountains#index'
  devise_for :users

  resources :mountains, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :mountains, only: [:index]
    end
  end
end
