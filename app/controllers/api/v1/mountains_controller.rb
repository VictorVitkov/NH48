class Api::V1::MountainsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    mountains = Mountain.all
    render json: mountains
  end

  def show
    mountain = Mountain.find(params["id"])
  end

  private

  def mountain_params
    params.require(:mountain).permit(:name, :elevation)
  end
end
