# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview
  def order_confirmation_email
    email = 'jnumeroff@hotmail.com'
    order = {
      "restaurant_name"=>"Shorty's",
      "subtotal"=>"10.14",
      "delivery_fee"=>"5",
      "tax"=>"1.343675",
      "tip"=>"0.2",
      "total"=>"18.511675"
    }
    items = {
      "0"=>{
        "name"=>"Souvlaki",
        "price"=>"10.14",
        "quantity"=>"1",
        "item_instructions"=>"",
        "options"=>{
          "0"=>{"name"=>"French Fries"},
          "1"=>{"name"=>"Sprinkles"}
        }
      }
    }
    UserMailer.order_confirmation_email(email, order, items)
  end

end
