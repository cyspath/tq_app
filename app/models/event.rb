class Event < ActiveRecord::Base
  validates :name, :founder, :group, :date, presence: true

  attr_accessor :member_count

  has_many :event_members
  has_many :members, through: :event_members, source: :user

  belongs_to :founder, foreign_key: :owner_id, class_name: User

  belongs_to :group

  def self.upcoming_events
    # events = self.find_by_sql(
    #   "SELECT * FROM Events WHERE date >= current_date ORDER BY date, start_time ASC LIMIT 200"
    # )
    events = Event.where("date >= ?", Time.now).order(:date, :start_time).limit(200).includes(:members, :group)
  end

  def self.upcoming_events_by_date
    result = []
    current_date = ""
    upcoming_events.each do |event|
      if event.date != current_date
        current_date = event.date
        result.push({ date: current_date, events: [event] })
      elsif event.date == current_date
        result.last[:events].push(event)
      end
    end
    result
  end

  # def member_count
  #   @member_count = members.size
  # end

  # def self.upcoming_events_by_date
  #   result = []
  #   current_date = ""
  #   upcoming_events.each do |event|
  #     if event.date != current_date
  #       current_date = event.date
  #       result.push({ date: current_date, events: [event] })
  #     elsif event.date == current_date
  #       result.last[:events].push(event)
  #     end
  #   end
  #   result
  #   [[upcoming_events[0], upcoming_events[1]], [upcoming_events[2]]]
  # end

  # def self.upcoming_events_by_date
  #   upcoming_events.group_by(&:date)
  # end

  def start_time_formatted
    Time.at(start_time).utc.strftime("%I:%M%p")
  end

  def end_time_formatted
    Time.at(end_time).utc.strftime("%I:%M%p")
  end

  def group_name
    group.name
  end


  # has_many :comments, as: :commentable
  #
  # has_many :images, as: :imageable
end
