class ContributionSerializer < ActiveModel::Serializer
  attributes :id, :organization, :amount, :legislator_id
end
