class CreateHikes < ActiveRecord::Migration[5.2]
  def change
    create_table :hikes do |t|
      t.string :name, null: false
      t.date :date, null: false
      t.text :description, null: false

      t.belongs_to :user
      t.belongs_to :mountain

      t.timestamps null: false
    end
  end
end
