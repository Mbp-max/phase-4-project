class AddMovieToReviews < ActiveRecord::Migration[6.1]
  def change
    add_reference :reviews, :movie, null: false, foreign_key: true
  end
end
