class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :overview
      t.string :title
      t.string :poster_path
      t.string :release_date
      t.string :vote_average

      t.timestamps
    end
  end
end
