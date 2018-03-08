class RenameLatitudeLongitude < ActiveRecord::Migration[5.1]
  def change
    rename_column :restaurants, :lat, :latitude
    rename_column :restaurants, :lng, :longitude
  end
end
