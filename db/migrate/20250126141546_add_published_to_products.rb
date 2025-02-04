class AddPublishedToProducts < ActiveRecord::Migration[8.0]
  def change
    add_column :products, :publish, :boolean, null: false, default: false
  end
end
