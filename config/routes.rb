Rails.application.routes.draw do
  root 'mountains#index'
  devise_for :users

  resources :mountains, only: [:index]

end
