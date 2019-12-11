 //= link application.js
//= link_tree ../images
//= link_directory ../stylesheets .css
Rails.application.config.assets.precompile +=
  %w(*.png *.jpg *.jpeg *.gif vendor/somefile.js vendor/somefile.css \
     vendor/bootstrap/*.js vendor/bootstrap/*.css \
     vendor/bootstrap/**/*.js vendor/bootstrap/**/*.css)
