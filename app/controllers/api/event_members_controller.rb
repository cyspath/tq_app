class Api::EventMembersController < ApplicationController

  def create
    begin
      @event_member = EventMember.find_or_create_by(event_id: params[:event_id], user_id: current_user.id)
      @event_member.update(going: true)
      render json: @event_member
    rescue
      render json: @event_member.errors.full_messages, status: 422
    end
  end

  def destroy
    begin
      @event_member = EventMember.find_or_create_by(event_id: params[:id], user_id: current_user.id)
      @event_member.update(going: false)
      render json: @event_member
    rescue
      render json: @event_member.errors.full_messages, status: 422
    end
  end

  def event_member_params
    params.require(:event_member).permit(:event_id)
  end
end
