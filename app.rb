# encoding: utf-8

require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, { adapter: "sqlite3", database: "pizzashop.db" }

class Product < ActiveRecord::Base
end

class Order < ActiveRecord::Base
  validates :name, :phone, :adress, presence: true
end

before do
  @products = Product.all
  @c = Order.new
end

get '/' do
  erb :index 
end

get '/menu' do
  erb :menu
end

get '/admin' do
  @orders_list = Order.order(created_at: :desc)
  erb :admin
end  

post '/cart' do
  @orders_input = params[:orders]
  @items = parse_orders_input(@orders_input)
  
  if @items.empty?
    erb "Cart is empty."
  else
    @items.each do |item|
      # item = [id, cnt]
      item[0] = @products.find(item[0])
    end
    erb :cart
  end 
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

def parse_orders_input (orders_input)
  [orders_input.delete('product_,').split('=')]
end
