Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [ :create, :index, :show] do
      resources :book_shelves, only: [:index]
    end
    resource :session, only: [:create, :new, :destroy]
    resources :books, only: [:create, :show, :index, :update] do
      resources :reviews, only: [:create, :index,:destroy, :show]
    end
    resources :library, only: [:create, :destroy, :show]
    resources :book_shelves, except: [:index]
    resources :reviews, only: [:update]
  end
  root 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
