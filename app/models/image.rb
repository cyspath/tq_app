class Image < ActiveRecord::Base
  belongs_to :imageable, polymorphic: true

  LIGHT_COLORS = %w{ 0xF4F4F4F4 0xFFEFD5D5 0xFFF0F5F5 0x#F0FFF0F0 }

  def self.generate_identicon
    background_color = Image::LIGHT_COLORS.sample
    RubyIdenticon.create_base64(
      "identicons are great!",
      grid_size: 9,
      square_size: 3,
      border_size: 8,
      key: (1000000000000000 + rand(1000000000000000)).to_s,
      background_color: background_color
    )
  end
end
