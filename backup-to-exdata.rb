#!/usr/bin/env ruby
require "rubygems"
require "json"
require "net/http"
require "uri"
 
collections = {}

#uri = URI.parse("http://10.128.2.2:8080/api")
uri = URI.parse("http://127.0.0.1:5000/exdata/api.json")

def FindNextLink(collection, doc)
	if doc["id"] && doc["name"]
		collection[doc["id"]] = {name:doc["name"]}
	end
end

def APIget(collection, uri, list)
  http = Net::HTTP.new(uri.host, uri.port)
  request = Net::HTTP::Get.new(uri.request_uri)
   
  response = http.request(request)
  
  if response.code == "200"
    result = JSON.parse(response.body)
  
    result[list].each do |item|
      FindNextLink(collection, item)
    end
  else
    puts "ERROR!!!"
  end
end

APIget(collections, uri, "collections")

puts "Found items"
collections.each do |id, data|
	puts id
	puts data[:name]
	puts data
	puts ""
end
