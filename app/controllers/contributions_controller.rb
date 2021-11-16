class ContributionsController < ApplicationController
    def index
        render json: Contribution.all
    end

    def show
        contribution = Contribution.find_by(id: params[:id])
        render json: contribution
    end
end
