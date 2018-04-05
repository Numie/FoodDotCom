Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index]
    resources :restaurants, only: [:show] do
      resources :menu_items, only: [:index]
      # resources :item_option_sections, only: [:index]
      # resources :item_options, only: [:index]
      resources :reviews, only: [:index, :create]
    end
    resources :orders, only: [:create] do
      resources :order_items, only: [:create]
      resources :order_item_options, only: [:create]
    end
  end
end
