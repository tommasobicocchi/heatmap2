 //= link application.js
//= link_tree ../images
//= link_directory ../stylesheets .css
afab4c72cdfd45db4a8b70cafcd0913386cd33cb
Rails.application.config.assets.precompile +=
  %w(*.png *.jpg *.jpeg *.gif vendor/somefile.js vendor/somefile.css \
     vendor/bootstrap/*.js vendor/bootstrap/*.css \
     vendor/bootstrap/**/*.js vendor/bootstrap/**/*.css)
