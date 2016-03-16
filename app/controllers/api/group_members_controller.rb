class Api::GroupMembersController < ApplicationController

  def create
    @group_member = GroupMember.new(group_id: params[:group_id], user_id: current_user.id)
    if @group_member.save
      render json: @group_member
    else
      render json: @group_member.errors.full_messages, status: 422
    end
  end

  def destroy
    @group_member = GroupMember.find(params[:id])
    @group_member.destroy if @group_member
    render json: {}
  end

  def group_member_params
    params.require(:group_member).permit(:group_id)
  end
end
