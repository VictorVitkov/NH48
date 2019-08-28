class RemoveMtnIdFromHikeTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :hikes, :mountain_id
  end
end
