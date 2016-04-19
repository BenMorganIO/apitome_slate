Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'fonts', 'nxtleveldocs')
Rails.application.config.assets.precompile += %w(
  nxtleveldocs/navbar.png
  nxtleveldocs/screen.css
  nxtleveldocs/print.css
)
