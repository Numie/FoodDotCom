class RemoveDefaultTimestamp < ActiveRecord::Migration[5.1]
  def change
    change_column_default(:reviews, :created_at, nil)
    change_column_default(:reviews, :updated_at, nil)
  end
end
