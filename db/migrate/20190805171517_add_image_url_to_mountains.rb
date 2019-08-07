class AddImageUrlToMountains < ActiveRecord::Migration[5.2]
  def change
    add_column :mountains, :image, :text
  end
end
