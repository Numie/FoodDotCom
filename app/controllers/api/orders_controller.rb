class OrdersController < ApplicationController

  def create
    @order = Order.new(order_params)

    if @order.save
      render '/'
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  private

  def order_params
    params.require(:order).permit(:subtotal, :tax, :tip, :delivery_fee, :total, :delivery_instructions)
  end

end
