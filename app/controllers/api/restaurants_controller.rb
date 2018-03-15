class Api::RestaurantsController < ApplicationController

  def index
    @restaurants = Restaurant.all_with_ratings.near(params[:address], 1)
    
    if @restaurants
      render :index
    else
      render json: ['Error processing address! Please try again.'], status: 500
    end
  end

  def show
    @restaurant = Restaurant.find_by(id: params[:id])

    if @restaurant
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 404
    end
  end

end
