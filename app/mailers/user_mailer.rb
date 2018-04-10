class UserMailer < ApplicationMailer

  def order_confirmation_email(email, order, order_items)
    @email = email
    @order = order
    @order_items = order_items
    mail(to: email, subject: 'Thanks for your (fake) order!')
  end
end
