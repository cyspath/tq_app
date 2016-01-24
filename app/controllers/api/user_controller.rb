class Api::UserController < ApplicationController

  def index
    @user = current_user
    render 'show'
  end


end
