class Api::UserController < ApplicationController

  def index
    @users = User.all
    render 'index'
  end

  def show
    @user = User.find(params[:id])
    render 'show'
  end

  def current_user_detail
    @user = current_user
    render 'current_user_detail'
  end

end
