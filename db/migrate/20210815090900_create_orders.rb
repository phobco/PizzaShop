class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :name
      t.string :phone
      t.string :adress
      t.text :products_list

      t.timestamps
    end
  end
end
