class WatchlistsController < ApplicationController
    def index
        render json: Watchlist.all
    end

    
end
