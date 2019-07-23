class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  private

  def mountain_params
    params.require(:mountain).permit(:name, :elevation)
  end
end
