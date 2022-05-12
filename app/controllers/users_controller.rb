class UsersController < ApplicationController
    # skip_before_action :authorize_user, only: [:create]


    def index
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end 

    def show
        current_user = User.find_by(id: session[:current_user])
        render json: current_user
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :created
    end

    private 

    def user_params
        params.permit(:username, :email, :password)
    end 
end