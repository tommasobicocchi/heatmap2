class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :photo, :photo_cache])
end
