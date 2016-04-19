Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'fonts', 'apitome_slate')
Rails.application.config.assets.precompile += %w(
  apitome_slate/navbar.png
  apitome_slate/screen.css
  apitome_slate/print.css
)
