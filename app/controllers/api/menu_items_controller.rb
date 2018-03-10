class Api::MenuItemsController < ApplicationController

  def index
    @menu_items = MenuItem.where(restaurant_id: params[:restaurant_id])
    if @menu_items
      render :index
    else
      render json: ['Error finding menu! Please try again.'], status: 500
    end
  end

end
