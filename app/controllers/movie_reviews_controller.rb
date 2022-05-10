class MovieReviewsController < ApplicationController

    def create
        movie_review = MovieReview.create!(review_params)
        render json: movie_review, status: :created
    end

    def index
        movie_reviews = MovieReview.all
        render json: movie_reviews
    end

    private

    def review_params
        params.permit(:poster_path, :title, :overview, :release_date, :vote_average, :review_body)
    end

end
