class Api::OrderItemsController < ApplicationController

  def create
    debugger
    @order_item = OrderItem.new(order_item_params)
    debugger

    unless @order_item.save
      debugger
      render json: @order_item.errors.full_messages, status: 422
    end
  end

  private

  def order_item_params
    params.require(:order_item).permit(:order_id, :menu_item_id, :quantity, :item_instructions)
  end

end
