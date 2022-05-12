class CreateRelationships < ActiveRecord::Migration[6.1]
  def change
    create_table :relationships do |t|
      t.integer :follower_id
      t.integer :followed_id
      # t.references :user, null: false, foreign_key: true

      t.timestamps
    end
end
end