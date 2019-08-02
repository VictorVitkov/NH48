class AddDescriptionDistanceDirectionsToMtnTable < ActiveRecord::Migration[5.2]
  def change
    add_column :mountains, :description, :text
    add_column :mountains, :distance, :text
    add_column :mountains, :directions, :text
  end
end
