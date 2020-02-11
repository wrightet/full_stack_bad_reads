Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [ :create]
    resource :session, only: [:create, :new, :destroy]
    resources :books, only: [:create, :show, :index, :update] do
      resources :reviews, only: [:create, :index, :update]
    end
    
  end
  root 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
