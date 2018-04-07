class Api::OrdersController < ApplicationController

  def create
    @order = Order.new(order_params)

    if @order.save
      render :show
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  private

  def order_params
    params.require(:order).permit(:user_id, :restaurant_id, :subtotal, :tax, :tip, :delivery_fee, :total, :delivery_instructions,
      order_items_attributes: [:order_id, :menu_item_id, :quantity, :item_instructions,
        order_item_options_attributes: [:order_item_id, :item_option_id]
      ]
    )
  end

end
