class Api::OrderConfirmationEmailsController < ApplicationController

  def create
    debugger
    email = params[:email]
    order = params[:order]
    items = params[:items]
    msg = UserMailer.order_confirmation_email(email, order, items)
    msg.deliver_now
  end

end
