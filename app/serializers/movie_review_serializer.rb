class MovieReviewSerializer < ActiveModel::Serializer
  attributes :id, :overview, :title, :poster_path, :release_date, :vote_average
  has_one :user
end
