class ApplicationMailer < ActionMailer::Base
  default from: 'no-reply@food.com'
  layout 'mailer'
end
