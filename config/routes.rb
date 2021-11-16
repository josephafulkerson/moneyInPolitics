Rails.application.routes.draw do
  
  resources :watchlists
  resources :users
  resources :contributions
  resources :legislators
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
