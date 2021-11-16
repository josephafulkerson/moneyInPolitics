class LegislatorSerializer < ActiveModel::Serializer
  attributes :id, :name, :party, :website_url

  has_many :contributions
end
