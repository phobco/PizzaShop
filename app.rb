# encoding: utf-8

require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, { adapter: "sqlite3", database: "pizzashop.db" }

class Product < ActiveRecord::Base
end

class Order < ActiveRecord::Base
  validates :name, presence: true
  validates :phone, presence: true
  validates :adress, presence: true
end

before do
  @products = Product.all
end

get '/' do
  erb :index 
end

get '/menu' do
  erb :menu
end

get '/cart' do
  @c = Order.new
  erb :cart
end

post '/order' do
  @c = Order.new params[:order]
  if @c.save
    erb :order
  else
    @error = @c.errors.full_messages.first
    erb :cart
  end
end