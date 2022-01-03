Rails.application.routes.draw do

    namespace :api do 

   
    resources :watchlists, only: [:create, :index, :destroy]
    resources :users, only: [:create, :show, :destroy]

    resources :contributions, only: [:index, :show]
    resources :legislators, only: [:index, :show, :destroy]

    get 'legislators/highest-contribution', to: 'legislators#highest-contribution'

    post '/signup', to: 'users#create'
    get '/me', to: 'users#show'
  

    post '/login', to: 'sessions#create'
    post '/logout', to: 'sessions#destroy'
    
  end

 
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
