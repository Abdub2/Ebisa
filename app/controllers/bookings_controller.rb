class BookingsController < ApplicationController
    before_action :authorize

    def index
        user = User.find_by(id: params[:id])
        if user
            bookings = Booking.all
            if bookings
                render json: bookings, status: :ok
            else
                render json: {error: 'Bookings not available.'}, status: :not_found
            end
        else
            render json: {error: 'User not found.'}, status: :not_found
        end
    end



    def show
        booking = Booking.find_by(id: params[:id])
        if booking
            render json: booking, status: :found
        else
            render json: {error: "Booking does not seem to exist"}, status: :not_found
        end
    end

    def create
        booking = Booking.create(
            full_name: params[:full_name]
            room_type: params[:room_type]
            email: params[:email]
            phone_number: params[:phone_number]
            check_in: params[:check_in]
            check_out: params[:check_out]
        )
        if booking.save
            render json: booking, status: :created
        else
            render json: {error: booking.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        booking = Booking.find_by(id: params[:user_id])
        booking.update(
            room_type: params[:room_type]
            price: params[:price]
            number_of_people: params[:number_of_people]
            check_in: params[:check_in]
            check_out: params[:check_out]
        )
        if booking
            render json:booking, status: :accepted
        else
            render json: {error: booking.error.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        booking = Booking.find_by(id: params[:user_id])
        booking.destroy
        if booking
            head :no_content
        else
            render json: {error: "Could not delete"}, status: :not_found
        end
    end

    private
    def authorize
        render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
