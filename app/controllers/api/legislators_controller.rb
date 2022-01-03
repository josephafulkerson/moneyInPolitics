class Api::LegislatorsController < ApplicationController
    def index
        render json: Legislator.all
    end

    def show
        legislator = Legislator.find_by(id: params[:id])
        render json: legislator
    end

    def destroy
        legislator = Legislator.find_by(id: params[:id])
        legislator.destroy
    end

    def highest_contribution
        legislator = Legislator.order(contributions: :desc).first
        render json: legislator
    end
end
