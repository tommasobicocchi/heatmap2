Rails.application.routes.draw do
  devise_for :users
  #get 'sign_up', to: 'pages#sign_up'
  get 'chart', to: 'pages#chart'
  get 'charts/preview', to: 'charts#preview'
  root to: 'pages#home'


  resources :projects do
    resources :documents, only: [:index, :create] do
      resources :charts, only: [:create]
    end
    resources :charts, only: [ :index, :show, :destroy, :create, :new ]
  end

  resources :documents, only: [] do
    resources :charts, only: [:create]
  end
end
