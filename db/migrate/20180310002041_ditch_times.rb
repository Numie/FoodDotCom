class DitchTimes < ActiveRecord::Migration[5.1]
  def change
    change_column :restaurants, :open_time, :string
    change_column :restaurants, :close_time, :string
  end
end
