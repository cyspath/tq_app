require 'time'
require 'date'

class Api::EventsController < ApplicationController

  def index
    @events = Event.find_by_sql("SELECT * FROM Events LIMIT 40")
    render 'index'
  end

  def show
    @event = Event.find(params[:id])
    render 'show'
  end

  def create
    # NEED TO GENERATE DATETIME FROM DATE AND START_TIME
    @event = Event.new(event_params.merge(owner_id: current_user.id))
    if @event.save
      render json: @event
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(event_params)
      render json: @event
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy if @event
    render json: {}
  end

  def event_params
    params.require(:event).permit(
      :name,
      :date,
      :start_time,
      :end_time,
      :location_name,
      :location_address,
      :description,
      :group_id,
      :datetime_num
    )
  end

end
