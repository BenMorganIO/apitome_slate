$:.push File.expand_path('../lib', __FILE__)

require 'apitome_slate/version'

Gem::Specification.new do |s|
  s.name        = 'apitome_slate'
  s.version     = ApitomeSlate::VERSION
  s.authors     = ['Daniel Johnson', 'Ben A. Morgan']
  s.email       = ['janiel.dohnson@gmail.com']
  s.homepage    = 'https://github.com/wildcardlabs/apitome_slate'
  s.summary     = 'Apitome for Slate.'
  s.description = 'Use this gem to get Apitome to style your docs like Slate does.'
  s.license     = 'MIT'

  s.files = Dir["{app,config,db,lib}/**/*", 'MIT-LICENSE', 'Rakefile', 'README.md']

  s.add_dependency 'rails', '>= 5.0.0.beta3', '< 5.1'
  s.add_dependency 'sass-rails'
  s.add_dependency 'jquery-rails'
  s.add_dependency 'rouge'
  s.add_dependency 'apitome'
  s.add_dependency 'rspec_api_documentation'

  s.add_development_dependency 'sqlite3'
end
