class Api::MenuItemsController < ApplicationController

  def index
    @menu_items = MenuItem.where(restaurant_id: params[:restaurant_id]).includes(:item_option_sections, :item_options)
    if @menu_items
      render :index
    else
      render json: ['Error finding menu! Please try again.'], status: 500
    end
  end

end
