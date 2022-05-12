class Review < ApplicationRecord
  belongs_to :user
  belongs_to :movie

  validates :user, uniqueness: {scope: :movie}
  validates :review_text, presence: true
  validates :rating, presence: true
end
