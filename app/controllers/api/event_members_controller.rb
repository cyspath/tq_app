class Api::EventMembersController < ApplicationController

  def create
    @event_member = EventMember.new(event_id: params[:event_id], user_id: current_user.id, going: true)
    if @event_member.save
      render json: @event_member
    else
      render json: @event_member.errors.full_messages, status: 422
    end
  end

  def destroy
    @event_member = EventMember.find(params[:id])
    @event_member.destroy if @event_member
    render json: {}
  end

  def event_member_params
    params.require(:event_member).permit(:event_id)
  end
end
