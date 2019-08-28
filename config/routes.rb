Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  resources :mountains, only: [:index, :show]
  resources :homes, only: [:index]
  resources :hikes, only: [:show, :new]

  namespace :api do
    namespace :v1 do
      resources :mountains, only: [:index, :show]
    end
  end
end
