Rails.application.routes.draw do
  devise_for :users
  get 'chart', to: 'pages#chart'
  get 'charts/preview', to: 'charts#preview'
  root to: 'pages#home'

  resources :projects, only: [:create, :index, :show, :new, :destroy, :edit, :update] do
  resources :documents do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    resources :charts, only: [:create, :index, :new, :update]
  end
  resources :charts, only: [ :show, :destroy ]
end
end
