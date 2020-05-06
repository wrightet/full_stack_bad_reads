class Api::UsersController < ApplicationController

   def create
    @user = User.new(user_params)
    
    if @user.save
      login(@user)
      @read = BookShelf.create(user_id: @user.id, name: 'read')
      @want_read = BookShelf.create(user_id: @user.id, name: 'want to read')
      @current_read = BookShelf.create(user_id: @user.id, name: 'currently reading')
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password)
    end
end
