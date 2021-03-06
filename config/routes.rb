 Rails.application.routes.draw do
  resources :follows
  resources :users
  resources :movies, only: [:show, :create, :index]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :relationships, only: [:create, :destroy]

  resources :users do
    member do
      get :following, :followers, :other_user
    end
  end

  

  # post "/login", to: "sessions#create"
  # get "/feed", to: "movie_reviews#index"
  
  # get "/me", to: "users#show"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/authorize_user', to: 'users#show'


  post '/login', to: "sessions#login"
  delete '/logout', to: 'sessions#logout'
end
