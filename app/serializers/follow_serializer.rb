class FollowSerializer < ActiveModel::Serializer
  attributes :id, :follower_id, :following_id :active_relationship, :passive_relationship
end
end
