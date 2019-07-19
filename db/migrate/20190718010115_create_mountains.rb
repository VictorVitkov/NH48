class CreateMountains < ActiveRecord::Migration[5.2]
  def change
    create_table :mountains do |t|
      t.string :name, null: false
      t.integer :elevation, null: false

      t.timestamps null: false
    end
  end
end
