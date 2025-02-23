class ProductsController < ApplicationController
  before_action :authenticate_user!

  def index 
    flash.now[:notice] = { 
      title: "Successfully On the Product Page", 
      body: "Welcome to our Application Product Page"
    }
  end

  def new 
    @product = current_user.products.build 
  end

  def edit 
    @product = Product.friendly.find(params[:id])
  end

  def create 
    @product = Product.new(product_params.merge(user:current_user))

    if @product.save 
      redirect_to edit_product_path(@product)
    else
      # Error state
    end
  end

  def update 
    @product = Product.friendly.find(params[:id])

    if @product.update(product_params)
      flash[:success] = "Product Successfully Updated"
      redirect_to edit_product_path(@product)
    else 
      # Error
    end
  end

  private 
  def product_params
    params[:product].delete(:price) if params[:product][:price].to_f.zero?
    params.require(:product).permit(:name, :description, :slug, :price, contents:[])
  end

end
