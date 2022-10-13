Rails.application.routes.draw do

  namespace :api do
  resources :tickets,only:[:index,:show,:create]
  resources :events
  # resources :users
  post"/login", to: "sessions#create"
  delete"/logout", to: "sessions#destroy"

  post"/signup", to: "users#create"

  get"/me", to: "users#show"

  get"/events", to: "events#index"
  end


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
