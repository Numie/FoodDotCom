class Api::RestaurantsController < ApplicationController

  def index
    @restaurants = Restaurant.near(params[:address], 20)
    # @restaurants = Restaurant.all
    render :index
  end

  def show
    @restaurant = Restaurant.find_by(id: params[:id])

    if @restaurant
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 404
    end
  end

  # private
  #
  # def restaurant_params
  #   params.require(:restaurant).permit(:name, :address, :phone, :img_url, :cuisine, :delivery_minimum, :delivery_fee, :open_time, :close_time, :lat, :lng)
  # end

end
