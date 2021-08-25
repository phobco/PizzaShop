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
  @c = Order.new
end

get '/' do
  erb :index 
end

get '/menu' do
  erb :menu
end

get '/admin' do
  @orders_list = Order.order("created_at DESC").all
  erb :admin
end  

post '/cart' do
  @orders_input = params[:orders]
  @items = parse_orders_input (@orders_input)
  
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
  s1 = orders_input.split(",")
  
  arr = []
  
  s1.each do |item|
    s2 = item.split("=")
    
    s3 = s2[0].split("_")

    id = s3[1]
    cnt = s2[1]
    
    arr_tmp = [id, cnt]
    
    if arr_tmp[1] != '0'
      arr.push arr_tmp
    end
  end
    return arr
end