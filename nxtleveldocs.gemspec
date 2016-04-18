$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "nxtleveldocs/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "nxtleveldocs"
  s.version     = Nxtleveldocs::VERSION
  s.authors     = ["daniel-johnson"]
  s.email       = ["janiel.dohnson@gmail.com"]
  s.homepage    = "TODO"
  s.summary     = "BenMorganIO's new ApiAutoDoc solution!"
  s.description = "Add this, it generates docs for yer API. What more do you want???"
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  s.add_dependency 'rails', '>= 5.0.0.beta3', '< 5.1'

  s.add_development_dependency 'pg'

  s.add_dependency 'rouge'

  s.add_dependency 'apitome', github: 'BenMorganIO/apitome', branch: 'remove-splat-for-single-page-apps'

  s.add_dependency 'rspec_api_documentation', github: 'zipmark/rspec_api_documentation', branch: 'rspec-3.5'

end
