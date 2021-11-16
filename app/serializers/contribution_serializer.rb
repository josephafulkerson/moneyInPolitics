class ContributionSerializer < ActiveModel::Serializer
  attributes :id, :organization, :amount, :legislator_id

  belongs_to :legislator
end
