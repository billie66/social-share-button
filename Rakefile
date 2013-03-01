require "bundler/gem_tasks"

require 'sprite_factory'

ROOT_PATH = File.dirname(__FILE__)

namespace :assets do
  desc 'recreate sprite images and css'
  task :resprite do 
    SpriteFactory.library = :chunkypng
    SpriteFactory.cssurl = "image-path('sprites/$IMAGE')"
    dirs = Dir.glob("#{ROOT_PATH}/lib/assets/images/sprites/*/")
    dirs.each do |path|
      dir_name = path.split("/").last
      SpriteFactory.run!("lib/assets/images/sprites/#{dir_name}", 
                          :layout => :packed,
                          :output_style => "lib/assets/stylesheets/#{dir_name}.scss", 
                          :nocomments => true,
                          :selector => ".#{dir_name}-") do |images|
        result = []
        images.each do |img|
          result << ".social-share-button-#{img[0]} { display:inline-block; #{img[1][:style]} }"
        end
        result.join("\n")
      end
    end
  end
end
