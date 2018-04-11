class UserMailer < ApplicationMailer

  def order_confirmation_email(email, order, items)
    @email = email
    @order = order
    @items = items.values

    attachments.inline['logo2.jpg'] = File.read('app/assets/images/logo2.jpg')

    mail(to: email, subject: 'Thanks for your (fake) order!')
  end
end
