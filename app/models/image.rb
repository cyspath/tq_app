class Image < ActiveRecord::Base
  belongs_to :imageable, polymorphic: true

  LIGHT_COLORS = %w{ 0xCCFFCC 0xFFCCCC 0xF4F4F4F4 0xFFEFD5D5 0xFFF0F5F5 0xF0FFF0F0 }

  def self.generate_identicon
    # background_color = Image::LIGHT_COLORS.sample
    RubyIdenticon.create_base64(
      "identicons are great!",
      grid_size: 9,
      square_size: 15,
      border_size: 40,
      key: (1000000000000000 + rand(1000000000000000)).to_s,
      background_color: 0xF9F9F9F9
    )
  end
end
