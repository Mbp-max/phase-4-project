class AddReviewBodyToMovieReview < ActiveRecord::Migration[6.1]
  def change
    add_column :movie_reviews, :review_body, :string
  end
end
