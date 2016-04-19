$:.push File.expand_path('../lib', __FILE__)

require 'nxtleveldocs/version'

Gem::Specification.new do |s|
  s.name        = 'nxtleveldocs'
  s.version     = Nxtleveldocs::VERSION
  s.authors     = ['Daniel Johnson', 'Ben A. Morgan']
  s.email       = ['janiel.dohnson@gmail.com']
  s.homepage    = 'https://github.com/nxtlevelyou/nxtleveldocs'
  s.summary     = "A new ApiAutoDoc solution!"
  s.description = 'Add this, it generates docs for yer API. What more do you want???'
  s.license     = 'MIT'

  s.files = Dir["{app,config,db,lib}/**/*", 'MIT-LICENSE', 'Rakefile', 'README.md']

  s.add_dependency 'rails', '>= 5.0.0.beta3', '< 5.1'
  s.add_dependency 'rouge'
  s.add_dependency 'apitome'
  s.add_dependency 'rspec_api_documentation'

  s.add_development_dependency 'sqlite3'
end
