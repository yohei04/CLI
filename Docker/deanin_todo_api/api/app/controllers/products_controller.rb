class ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: @products
  end

  def create
    @product = Product.create(product: params[:product])
    render json: @product
  end

  def update
    @product = Product.find(params[:id])
    @product.update(product: params[:product])
    render json: @product
  end

  def destroy
    @product = Product.find(params[:id])
    if @product.destroy
      head :no_content, status: :ok
    else
      render json: @product.errors, status: :unprocessable_entity
    end
    

  end
end
