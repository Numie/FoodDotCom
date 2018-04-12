class UserMailer < ApplicationMailer

  def order_confirmation_email(email, order, items)
    @email = email
    @order = order
    @items = items.values

    mail(from: 'no-reply@food.com', to: email, subject: 'Thanks for your (fake) order!')
  end
end
