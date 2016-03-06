require 'time'
require 'date'

class Api::EventsController < ApplicationController

  def index
    # @events = Event.upcoming_events
    # render 'index'
    @events_by_date = upcoming_events_by_date(
                        Event.where("date >= ?", Time.now)
                             .order(:date, :start_time)
                             .includes(:members, :group)
                             .paginate(:page => params[:page], :per_page => 20)
                      )

    # render json: @events_by_date
    render 'index'
  end

  def upcoming_events_by_date(upcoming_events)
    result = []
    current_date = ""
    upcoming_events.each do |event|
      next unless event.group.location_id == current_user.location_id
      if event.date != current_date
        current_date = event.date
        result.push({ date: current_date, events: [event] })
      elsif event.date == current_date
        result.last[:events].push(event)
      end
    end
    result
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
