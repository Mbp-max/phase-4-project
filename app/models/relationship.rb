class Relationship < ApplicationRecord
     belongs_to :follower
    belongs_to :followed
    validates :follower_id, presence: true
    validates :followed_id, presence: true
end

 # belongs_to :follower, class_name: "User"
    # belongs_to :followed, class_name: "User"
    