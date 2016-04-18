Apitome.setup do |config|
  config.mount_at = '/' unless Rails.env.test?
  config.doc_path = 'doc/api'
  config.layout = 'application'
  config.readme = '../api.md'
end
