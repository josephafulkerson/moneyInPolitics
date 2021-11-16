class Watchlist < ApplicationRecord
    has_many :legislators
    belongs_to :user
end
