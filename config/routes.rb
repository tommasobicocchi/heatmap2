Rails.application.routes.draw do
  devise_for :users
  get 'chart', to: 'pages#chart'
  root to: 'pages#home'
  resources :documents
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :projects, only: [:create, :index, :show, :new, :destroy] do
    resources :charts, only: [:create, :index, :new, :destroy]
  end
end
