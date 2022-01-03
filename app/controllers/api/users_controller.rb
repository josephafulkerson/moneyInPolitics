class Api::UsersController < ApplicationController

    skip_before_action :confirm_authentication, only: [:create]

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: 422
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
