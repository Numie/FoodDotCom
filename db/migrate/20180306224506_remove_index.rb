class RemoveIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :users, name: "index_users_on_email_and_session_token"
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
