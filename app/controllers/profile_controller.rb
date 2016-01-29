class ProfileController < ApplicationController
  # before_action :authenticate_user!

  def index
    @user = current_user
  end

  def update
    current_user.update(user_params)
    redirect_to root_url
  end

  private

  def user_params
    params.require(:user).permit(:email, :phone, :username)
  end

end
