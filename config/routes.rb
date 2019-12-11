Rails.application.routes.draw do
  devise_for :users
  get 'chart', to: 'pages#chart'
  root to: 'pages#home'
  resources :projects, only: [:create, :index, :show, :new, :destroy]
  resources :documents do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    resources :charts, only: [:create, :index, :new]
  end
  resources :charts, only: [ :show, :destroy ]
end
