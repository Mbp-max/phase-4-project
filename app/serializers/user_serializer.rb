class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest
  has_many :reviews
  has_many :following
  has_many :followers
end
