class User < ApplicationRecord
    has_secure_password
    has_many :bookings
    validates :full_name, presence: true, uniqueness: true
    validates :email, uniqueness: true, presence: true
end
