require 'rouge'
require 'sass-rails'
require 'jquery-rails'
require 'apitome_slate/engine'

module Apitome
  class Configuration

    cattr_accessor :allow_search, :logo_file

    @@logo_file = "icon.svg"
    @@allow_search = true

  end
end

module ApitomeSlate
  # Your code goes here...
end
