class UserMailer < ApplicationMailer

  def order_confirmation_email(email, order, items)
    @email = email
    @order = order
    @items = items.values
    mail(to: email, subject: 'Thanks for your (fake) order!')
  end
end
