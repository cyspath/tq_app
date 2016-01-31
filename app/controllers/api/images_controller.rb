class Api::ImagesController < ApplicationController
  # def index
  #   @images = Image.all
  #   render 'index'
  # end

  def create
    image = Image.new(image_params)
    if image.save
      render json: image
    else
      render json: {message: 'failure'}, status: 422
    end
  end

  # def show
  #   @image = Image.find(params[:id])
  #   render 'show'
  # end

  def destroy
    image = Image.find(params[:id])
    image.destroy if image
    render json: {}
  end

  private
  def image_params
    params.require(:image).permit(
      :url_original,
      :url_cropped,
      :url_225x225,
      :url_50x50,
      :url_30x30,
      :imageable_type,
      :imageable_id
    )
  end
end
