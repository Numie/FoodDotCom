class Api::OrdersController < ApplicationController

  def create
    @order = Order.new(order_params)
    @order.restaurant_id = params[:order][:restaurantId]
    @order.user_id = current_user.id
    
    if @order.save
      render :show
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  private

  def order_params
    params.require(:order).permit(:restaurant_id, :subtotal, :tax, :tip, :delivery_fee, :total, :delivery_instructions, order_items_attributes: [:order_id, :menu_item_id, :quantity, :item_instructions])
  end

end
