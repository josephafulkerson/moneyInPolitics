class WatchlistSerializer < ActiveModel::Serializer
  attributes :id, :legislator_id, :user_id
end
