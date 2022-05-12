class MoviesController < ApplicationController

    def create
        movie_review = Movie.create!(review_params)
        render json: movie_review, status: :created
    end

    def index
        movie_reviews = Movie.all
        render json: movie_reviews
    end

    private

    def review_params
        params.permit(:poster_path, :title, :overview, :release_date, :vote_average)
    end

end
