class Event < ActiveRecord::Base
  validates :name, :founder, :group, :date, presence: true

  has_many :event_members, -> { where going: true }, class_name: EventMember
  has_many :bailed_event_members, -> { where going: false }, class_name: EventMember
  has_many :members, through: :event_members, source: :user
  has_many :bailed_members, through: :bailed_event_members, source: :user

  belongs_to :founder, foreign_key: :owner_id, class_name: User

  belongs_to :group

  has_many :images, as: :imageable

  # def self.upcoming_events
  #   # events = self.find_by_sql(
  #   #   "SELECT * FROM Events WHERE date >= current_date ORDER BY date, start_time ASC LIMIT 200"
  #   # )
  #   events = Event.where("date >= ?", Time.now).order(:date, :start_time).includes(:members, :group).paginate(:page => params[:page], :per_page => 20)
  # end
  #
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
