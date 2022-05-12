class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :overview, :poster_path, :release_date, :vote_average
  has_many :reviews
end
