class CreateMountainHikes < ActiveRecord::Migration[5.2]
  def change
    create_table :mountain_hikes do |t|
      t.integer :hike_id
      t.integer :mountain_id

      t.belongs_to :hike
      t.belongs_to :mountain

      t.timestamps null: false
    end
  end
end
