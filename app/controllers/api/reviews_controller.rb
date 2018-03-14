class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.where(resaturant_id: params[:restaurant_id])

    if @reviews
      render :index
    else
      render json: ['Error processing review! Please try again.'], status: 500
    end
  end

  def create
    @review = Review.new(review_params)

    unless @review.save
      render json: @review.errors.full_messages, status: 422
    end
  end


  private

  def review_params
    params.require(:review).permit(:user_id, :restaurant_id, :rating, :review)
  end

end
