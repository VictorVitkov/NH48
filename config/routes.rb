Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  resources :mountains, only: [:index, :show]
  resources :homes, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :mountains, only: [:index, :show]
    end
  end
end
