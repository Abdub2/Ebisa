class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :full_name, unique: true, null: false
      t.string :email, unique: true, null: false
      t.integer :number, unique: true, null: false
      t.string :password_digest, unique: true, null: false

      t.timestamps
    end
  end
end
