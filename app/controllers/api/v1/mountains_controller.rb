class Api::V1::MountainsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    mountains = Mountain.order(elevation: :desc)

    render json: mountains
  end

  def show
    mountain = Mountain.find(params["id"])
    payload = {"mountain": mountain}
    render json: payload
  end

  private

  def mountain_params
    params.require(:mountain).permit(:name, :elevation)
  end
end
