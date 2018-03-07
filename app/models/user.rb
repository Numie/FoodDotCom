class User < ApplicationRecord
  validates :email, presence: { message: 'Email is required!' }
  validates :email, uniqueness: { message: 'That email is already taken!' }
  validates :email, format: { with: /.+@.+..+/, message: 'Email is invalid!' }
  validates :session_token, presence: { message: 'Error logging in, please try again!' }
  validates :session_token, uniqueness: { message: 'Error logging in, please try again!' }
  validates :first_name, :last_name, presence: { message: 'Name is required!' }
  validates :password_digest, presence: { message: 'Password is required!' }
  validates :password, length: { minimum: 6, allow_nil: true, message: 'Password must be at least 6 characters!' }

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def generate_unique_session_token
    new_session_token = SecureRandom.urlsafe_base64
    while User.exists?(session_token: new_session_token)
      new_session_token = SecureRandom.urlsafe_base64
    end
    new_session_token
  end

end
