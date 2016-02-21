class Api::GroupsController < ApplicationController

  def index
    @groups = Group.limit(40).includes(:images, :members)
    # render json: Group.all
    render 'index'
  end

  def show
    @group = Group.find(params[:id])
    render 'show'
  end

  def create
    location_name = Location.find_by_location_id(params[:group][:location_id].to_i)
    @group = Group.new(group_params.merge(owner_id: current_user.id, owner_name: current_user.username, location_name: location_name))
    if @group.save
      render json: @group
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def update
    @group = Group.find(params[:id])
    if @group.update_attributes(group_params)
      render json: @group
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def destroy
    @group = Group.find(params[:id])
    @group.destroy if @group
    render json: {}
  end

  def group_params
    params.require(:group).permit(:name, :location_id, :description)
  end

end
