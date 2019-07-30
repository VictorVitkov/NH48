class CreateHikes < ActiveRecord::Migration[5.2]
  def change
    create_table :hikes do |t|
      t.string :name, null: false
      t.date :date, null: false
      t.text :description, null: false

      t.belongs_to :users
      t.belongs_to :mountains

      t.timestamps null: false
    end
  end
end
