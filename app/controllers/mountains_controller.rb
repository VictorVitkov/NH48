class MountainsController < ApplicationController
  def index
    @mountains = Mountain.order(elevation: :desc)
  end

  def show
    @mountain = Mountain.find(params[:id])
  end

  private

  def mountain_params
    params.require(:mountain).permit(:name, :elevation)
  end
end
