class User < ApplicationRecord
    validates  :session_token, :password_digest, :email, :first_name,
     :last_name, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token
    attr_reader :password

    has_many :books,
        through: :shelves,
        source: :books
    has_many :reviews
    has_many :book_shelves,
        foreign_key: :shelf_id,
        class_name: 'BookShelf'

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
