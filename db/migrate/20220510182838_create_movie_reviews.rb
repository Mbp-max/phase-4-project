class CreateMovieReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :movie_reviews do |t|
      t.string :overview
      t.string :title
      t.string :poster_path
      t.string :release_date
      t.string :vote_average
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
