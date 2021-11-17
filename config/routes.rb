Rails.application.routes.draw do
  
  resources :watchlists, only: [:create, :index, :destroy]
  resources :users, only: [:create, :show, :destroy]

  resources :contributions, only: [:index, :show]
  resources :legislators, only: [:index, :show, :destroy]

  get 'legislators/highest-contribution', to: 'legislators#highest-contribution'

  post '/signup', to: 'users#create'
 

  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
