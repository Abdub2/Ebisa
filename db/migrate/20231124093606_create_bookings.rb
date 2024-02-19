class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.string :full_name
      t.string :email
      t.string :room_type
      t.integer :phone_number
      t.date :check_in
      t.date :check_out

      t.timestamps
    end
  end
end
