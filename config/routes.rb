Rails.application.routes.draw do
    
  resources :auctions do 
  resources :bids, only:[:create, :destroy]
  end
        
  resources :users, only:[:new, :create]
  resource :session, only:[:new, :create, :destroy]
  
  namespace :api, defaults: {format: :json} do 
    namespace :v1 do
      resources :auctions, only:[:index, :show, :update, :create, :destroy]
      resource :session, only: [:create, :destroy]
      get('/current_user', to: 'sessions#get_current_user')
      resources :users, only:[:create]
  end
end
end
