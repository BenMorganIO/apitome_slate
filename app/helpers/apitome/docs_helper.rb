module Apitome
  module DocsHelper
    def request_code(request)
      format_code [
        format_request_path(request),
        format_headers(request, type: :request),
        format_body(request, type: :request)
      ].join("\n")
    end

    def response_code(request)
      format_code [
        format_response_path(request),
        format_headers(request, type: :response),
        format_body(request, type: :response)
      ].join("\n")
    end

    private

    def format_code(code)
      formatter = Rouge::Formatters::HTML.new(css_class: 'highlight')
      lexer = Rouge::Lexers::HTTP.new
      formatter.format(lexer.lex code).html_safe
    end

    def format_request_path(request)
      "#{request['request_method']} #{request['request_path']} HTTP/1.1"
    end

    def format_response_path(request)
      "HTTP/1.1 #{request['response_status']} #{request['response_status_text']}"
    end

    def format_headers(request, type:)
      request["#{type}_headers"].map do |key, value|
        [key, value].join(': ')
      end.join("\n")
    end

    def format_body(request, type:)
      return '' unless request["#{type}_body"]

      "\n" + formatted_body(request["#{type}_body"], 'json')
    end
  end
end
