class UsersController < ApplicationController
    def show

    end

    private

    # def authorize
    #     return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    # end

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
